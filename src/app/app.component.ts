import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { access } from 'fs';
// import { ApiService } from "../app/Services/api.service";
import { ServerHttpService } from '../app/Services/server-http.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './Services/auth.service';
declare var jQuery: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private url1 ="http://172.29.65.197:4200/"

  
  rearchClass = "search"
  title = 'projectAngular';
  navRightClass ="navRightClass"
  rowClass = "row";

  private roles: string[] = [];
  isLoggedIn:any;
  showAdminBoard = false;
  showModeratorBoard = false;
  accesstoken:any;
  username:any;
 

  constructor( private authService: AuthService, private router: Router, private cookieService: CookieService) { }
  
  ngOnInit(): void {
    this.username = localStorage.getItem('user-login');  
    this.isLoggedIn = localStorage.getItem('isLoggedIn');  
 
  }


  logOut() {  
    console.log('logout');  
    (function ($) {
      console.log(1);
      $('iframe').attr("src","http://172.29.65.197:3000/logout")
     
    })(jQuery);
    // window.open("http://172.29.65.197:3000/logout")
    localStorage.clear();
    localStorage.setItem('isLoggedIn','false'); 
    this.cookieService.delete('accesstoken'); 
    window.location.reload();
    this.router.navigate(['/signin']); 
  }  

}
