import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServerHttpService } from '../Services/server-http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public users: any[] = [];
  public user: any= "";

  public formSignIn = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(1),]),
    psw: new FormControl('',[Validators.minLength(3), Validators.maxLength(20),]),
    remember: new FormControl(''),
  });

  constructor(  private serverHttp: ServerHttpService,private router: Router) { }

  
  ngOnInit(): void {
    this.serverHttp.getUsers().subscribe(data=>{
      console.log(data);
     
      this.users = data;
    });


  }
  onSignIn(){
    var isLogin = false;
    
    var fname = this.formSignIn.controls.uname.value;
    var fpass = this.formSignIn.controls.psw.value
    for (var key in this.users) {
      // console.log(key)
      // console.log(this.users[key].username);
      if (fname == this.users[key].username && fpass == this.users[key].password) {
        // const element = this.users[key];
        // console.log(element);
        isLogin = true;
        alert("Login Successful");
        this.user = this.users[key] ;
        this.router.navigateByUrl("/home", { state: this.user });
      }
     
    }
    if(isLogin == false){
      alert("The username or password incorrect");
    }
    // if(fname == this.users[2].username && fpass == this.users[2].password)
    // {

    // }
    // console.log('username: ' + this.formSignIn.controls.uname.value + ' password:'+ this.formSignIn.controls.psw.value);
    // console.log( this.users[2].username);
  }

}
