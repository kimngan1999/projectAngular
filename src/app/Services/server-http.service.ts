import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})

export class ServerHttpService {

 
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  };
  private REST_API_SERVER = 'http://172.29.65.193:8000';

  private REST_API_SERVER_LOGIN = 'http://172.29.65.193:3000';

  constructor(private httpClient: HttpClient) { }
  // product
  public getProducts(){
    const url = `${this.REST_API_SERVER}/products`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }
  public addProducts(data:any){
    const url = `${this.REST_API_SERVER}/products`;
    return this.httpClient
    .post<any>(url,data, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }
  public deleteProducts(id: number){
    const url = `${this.REST_API_SERVER}/products/${id}`;
    return this.httpClient
    .delete<any>(url,this.httpOptions)
    .pipe( catchError(this.handleError));    
  }
  // category 
  public getCategories(){
    const url = `${this.REST_API_SERVER}/Categories`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }

  // user
  public getUsers(){
    const url = `${this.REST_API_SERVER}/Users`;
    return this.httpClient
    .get<any>(url, this.httpOptions)
    .pipe( catchError(this.handleError));    
  }

  // login
  // public loginGrafana(data:any){
  //   const url = `${this.REST_API_SERVER_LOGIN}/login`;
  //   return this.httpClient
  //   .post<any>(url,data, this.httpOptions)
  //   .pipe( catchError(this.handleError));    
  // }


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
