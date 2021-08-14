import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
   }

   logout() :void {     
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');     
    window.location.reload();
    this.cookieService.delete('accesstoken');
    }    
}
