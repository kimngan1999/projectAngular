import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from "../app/Services/api.service";
import { ServerHttpService } from '../app/Services/server-http.service';

import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  
  rearchClass = "search"
  title = 'projectAngular';
  navRightClass ="navRightClass"
  rowClass = "row";

  private roles: string[] = [];
  isLoggedIn:any;
  showAdminBoard = false;
  showModeratorBoard = false;
 
  username:any;
 

  constructor( private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {

    this.username = localStorage.getItem('token');  
     this.isLoggedIn = localStorage.getItem('isLoggedIn');  
  }


  logOut() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/signin']);  
  }  

}
