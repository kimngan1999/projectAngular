import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { element } from 'protractor';
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
// import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  public innerWidth: any;
  public innerHeight: any;
  @Input()
  isLogin = false;
  user:any;

  name:any;
    categoriesClass = "col-3 col-s-3 categories";
    categoriesName = "nameCategories"
    titleContentClass = "titleContent";
    productClass = "col-3 col-s-4 product";
    nameProductClass = "nameProduct";
    priceProductClass = "priceProduct";
    btnAddCartClass = "btn-add-cart";
    contentClass = "col-9 col-s-9 content";
    
    image = "image";
    

  
    constructor(private router: Router, private http: HttpClient) { }
  
    ngOnInit(): void {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
    }
    
    OnLoginGrafana(){
      const headers = {  'Access-Control-Allow-Credentials': 'true', 
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK', 
      'Access-Control-Allow-Origin': 'http://172.29.65.199',
      'Access-Control-Allow-Headers': 'X-Custom-Header',
      'accept': 'application/json, text/plain, */*',
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'en-US,en;q=0.9',
      'Connection': 'keep-alive',
      'content-type': 'application/json' };
      const body = {"user": "user_editor", "password": "123456"}
      this.http.post<any>('http://172.29.65.199/login', body, {headers}).subscribe(data => {
        console.log(data);
    });
    }
    
 
}
