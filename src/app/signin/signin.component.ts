import { NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServerHttpService } from '../Services/server-http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


@Output() Login:EventEmitter<any> = new EventEmitter()

  public users: any[] = [];
  public user: any= "";
  
  public isLogin = false;

  public formSignIn = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(1),]),
    psw: new FormControl('',[Validators.minLength(3), Validators.maxLength(20),]),
    remember: new FormControl(''),
  });

  constructor(  private serverHttp: ServerHttpService,private router: Router) { }

  
  ngOnInit(): void {
    this.serverHttp.getUsers().subscribe(data=>{
     
      this.users = data;
    });

  }
  onSignIn(){
   
    
    var fname = this.formSignIn.controls.uname.value;
    var fpass = this.formSignIn.controls.psw.value
    for (var key in this.users) {

      if (fname == this.users[key].username && fpass == this.users[key].password) {
         
        this.isLogin = true;
        // alert("Login Successful");
        this.user = this.users[key] ;

        this.Login.emit(this.user);
        this.router.navigateByUrl("/home", { state: this.user });

      }
     
    }
    if(this.isLogin == false){
      alert("The username or password incorrect");
    }

  }
 

}
