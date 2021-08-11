import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GrafanaOAuthService {
  public url = "";
  constructor( private httpClient: HttpClient, private router: Router) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  private REST_API_SERVER = 'http://localhost:8000';

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
    return this.httpClient.post<any>('http://localhost:8080/users/login', {username: user,password: pass}).pipe(
    map((data) => {
      if (!data.msg)
      {
        console.log(data);
        localStorage.setItem("auth-token", data.accessToken);
        localStorage.setItem("user-login", data.user.username);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.reload();
        return data;
      }
      else{
        localStorage.setItem("msg",data.msg);
        alert(data.msg);
      }  
      })
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

