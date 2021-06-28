import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.css']
})
export class ProductManageComponent implements OnInit {
  public products : any[] = [];
 
  public  Categories = '';
  public posts = '';

  constructor(
    private serverHttp: ServerHttpService,
     ) {
    
   }

  ngOnInit(): void {
    this.serverHttp.getProducts().subscribe(data=>{
      console.log(data);
     
      this.products = data;
    });

    this.serverHttp.getCategories().subscribe(data=>{
      console.log(data);
      this.Categories = data;
    });
  }
  public addProduct(){
    const newProduct = {name:"gau", price: "23000", image:"./images/iphone-12-xanh-duong-200x200-org.png"};
    this.serverHttp.addProducts(newProduct).subscribe(data=>{
      console.log('addProducts', data);
      this.products.push(data);
    });
  }
  deleteProduct(product: any){
    this.products = this.products.filter(p => p !== product);
    this.serverHttp.deleteProducts(product.id).subscribe();
    
  }

}
