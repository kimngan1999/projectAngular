import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { element } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
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
    
    img = ["assets/images/iphone-11-white-200-org.png"];
    img1 = ["assets/images/samsung-galaxy-s21-xam-200x200-org.png"];
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
      this.user = history.state;
      
      if(this.user!="")
      {
        console.log(this.user.username)
        
      }
      else{
        console.log("no data")
      }
     
      
    }
    message = "The product has been added to cart"
    onAddProductClick() {
      alert(this.message);
  }

}
