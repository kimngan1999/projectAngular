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
      // const headers = {  'Access-Control-Allow-Credentials': 'true', 
      // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK', 
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      // 'Access-Control-Allow-Headers': 'X-Custom-Header',
      // 'Cache-Control': 'no-cache',
      // 'Content-Length': '23',
      // 'Content-Type': 'application/json',
      // 'Pragma': 'no-cache',
      // 'Set-Cookie': 'grafana_session=ed86766e0040259ac72dcb7195acd065; Path=/; Max-Age=2592000; HttpOnly; SameSite=Lax',
      // 'X-Content-Type-Options': 'nosniff',
      // 'X-Xss-Protection': '1; mode=block', };
      const body = {"user": "user_editor", "password": "123456"}
      this.http.post<any>('http://172.29.65.199:3000/login', body).subscribe(data => {
        console.log(data);
    });
    }
    
 
}
