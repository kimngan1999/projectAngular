import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class GrafanaOAuthService {
  public url = "";
  public username:any;
  public email:any;
  private url1 ="http://172.29.65.193:4200/"
  constructor( private httpClient: HttpClient, private router: Router, private cookieService: CookieService) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  private REST_API_SERVER = 'http://172.29.65.193:8000';

  public getToken(){
    const url = `${this.REST_API_SERVER}/token`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }

  public addToken(data:any){
    const url = `${this.REST_API_SERVER}/token`;
    return this.httpClient
    .post<any>(url,data, this.httpOptions)
    .pipe( catchError(this.handleError));    
     
  }
  
  public getUserLogin(){
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }

  public addUserLogin(data:any){
    const url = `${this.REST_API_SERVER}/user`;
    return this.httpClient
    .post<any>(url,data, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }

  public login(user:any ,pass: any) {  
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 8);
    return this.httpClient.post<any>('http://172.29.65.193:8088/users/login', {username: user,password: pass}).subscribe(
    (data) => {
        this.Grafanalogin( data.user.username,  data.user.email)
        console.log(this.Grafanalogin);
        this.cookieService.set('accesstoken', data.accessToken, { expires: dateNow, sameSite: 'Lax' });
        localStorage.setItem("user-login", data.user.username);
        localStorage.setItem("user-email", data.user.email);
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigateByUrl('/home')
        window.location.href = this.url1; 
      }
    )
  }

  public Grafanalogin(username:any,email:any) {  
    return this.httpClient.patch<any>('http://172.29.65.193:8088/activeuser/6114d25e0ef030016eb610bd',{username: username, email:email}).subscribe(
    (data) => {
        console.log(data);
      }
    )
    
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  
}

