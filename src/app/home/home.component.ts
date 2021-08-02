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
    

  
    constructor(private router: Router,  private http: HttpClient) { }
  
    ngOnInit(): void {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight; 
    }
}
