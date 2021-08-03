import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GrafanaOAuthService {
  public url = "";

  constructor( private httpClient: HttpClient) { }
 
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  private REST_API_SERVER = 'http://172.29.65.197:8000';

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

