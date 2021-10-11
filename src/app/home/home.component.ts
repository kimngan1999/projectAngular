import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { element } from 'protractor';
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  public innerWidth: any;
  public innerHeight: any;
  private accessToken: any;
  private url1 ="http://172.29.65.195:4200/"
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
    

  
    constructor(private cookieService: CookieService, private router: Router,  private http: HttpClient) { }
  
    ngOnInit(): void {
      this.accessToken = this.cookieService.get('accesstoken')
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight; 
      const headers = { 'Authorization': 'Bearer ' + this.accessToken}
      this.http.get<any>('http://172.29.65.195:8080/user', {headers}).subscribe({
        next: data => {
          
        },
        error: error => {
            window.open("http://172.29.65.195:8088/logout")
            localStorage.clear();
            localStorage.setItem('isLoggedIn','false'); 
            this.cookieService.delete('accesstoken'); 
            this.router.navigate(['/signin']); 
            window.location.href = this.url1; 
        }
    })
    }
}
