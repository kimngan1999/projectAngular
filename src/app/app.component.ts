import { Component, Input } from '@angular/core';
// import { ApiService } from "../app/Services/api.service";
import { ServerHttpService } from '../app/Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = "";
  username = "";
  password = "";
  isLogin = false;
  classNav = "nav";
  rearchClass = "search"
  title = 'projectAngular';
  navRightClass ="navRightClass"
  rowClass = "row";

  constructor() { }
  
  ngOnInit(): void {

  }

  Login(data: any)
  {
    this.data=data;
    console.log("data",data)
    this.username=data.username;
    this.password=data.password;
    if(this.data){
      this.isLogin = true;
    }
    else{
      this.isLogin = false;
    }
  }

  logOut(){
    this.isLogin = false
    this.data= "";
    this.username= "";
    this.password= "";
  }
}
