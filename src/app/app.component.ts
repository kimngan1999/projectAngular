import { Component, Input } from '@angular/core';
// import { ApiService } from "../app/Services/api.service";
import { ServerHttpService } from '../app/Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  display = "none";
=======
>>>>>>> 54f81715c052b524929f4006d086733ae68db2c1
  data = "";
  username = "";
  password = "";
  isLogin = false;
<<<<<<< HEAD

=======
>>>>>>> 54f81715c052b524929f4006d086733ae68db2c1
  classNav = "nav";
  rearchClass = "search"
  title = 'projectAngular';
  navRightClass ="navRightClass"
  rowClass = "row";

  constructor() { }
  
  ngOnInit(): void {

  }
<<<<<<< HEAD
  getdata(data: any)
  {
    this.data=data;
    this.username=data.username;
    this.username=data.password;
=======

  Login(data: any)
  {
    this.data=data;
    console.log("data",data)
    this.username=data.username;
    this.password=data.password;
>>>>>>> 54f81715c052b524929f4006d086733ae68db2c1
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
<<<<<<< HEAD
    this.username= "";
  }

 
 
=======
    this.password= "";
  }
>>>>>>> 54f81715c052b524929f4006d086733ae68db2c1
}
