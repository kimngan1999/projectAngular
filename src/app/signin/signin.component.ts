import { NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServerHttpService } from '../Services/server-http.service';
import { Router } from "@angular/router";

import { AuthService } from '../Services/auth.service';
import { GrafanaOAuthService } from '../Services/grafana-oauth.service';

import {Md5} from 'ts-md5/dist/md5';
import { createElementCssSelector } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  public token : any = "";
  public formSignIn = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(1),]),
    psw: new FormControl('',[Validators.minLength(3), Validators.maxLength(20),]),
    remember: new FormControl(''),
  });

  constructor(  private serverHttp: ServerHttpService,private serverAuth: GrafanaOAuthService,private router: Router, 
    private authService: AuthService) { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    if(this.formSignIn.invalid){
      return;
    }
    var fname = this.formSignIn.controls.uname.value;
    var fpass = this.formSignIn.controls.psw.value;
    
    this.serverAuth.login(fname,fpass).pipe(
      map(data => this.router.navigateByUrl('/home'))
    ).subscribe();
  }

}
    
   /*
    var fname = this.formSignIn.controls.uname.value;
    var fpass = this.formSignIn.controls.psw.value;
    for (var key in this.users) {
    
      if (fname == this.users[key].username && fpass == this.users[key].password) { 
        this.user = this.users[key] ;
        this.addUserLogin(this.users[key].username, this.users[key].email);
   
        localStorage.setItem('isLoggedIn', 'true');  
        localStorage.setItem('token', this.users[key].username);         
        this.isLogin = true;
        const md5 = new Md5();
   
        this.acc_token= md5.appendStr(this.users[key].password).end();
        this.addToken(this.acc_token);

        this.router.navigateByUrl("/home");
        this.reloadPage();
 
      }
    }
    if(this.isLogin == false){
      alert("The username or password incorrect");
    
    }
  }
  reloadPage(): void {
    window.location.reload();
  }

  // public onLoginGrafana(us: any, ps: any){
    
  //   const uers = {username: us , password: ps};
   
  //   this.serverHttp.loginGrafana(uers).subscribe(data=>{
  //     console.log('addUsername', data);

  //   });
  // }

  public addToken(access_token: any){
    
    const newToken = {access_token: this.uniqid(access_token), token_type: "Bearer", expiry_in:"1566172800", refresh_token: this.uniqid(access_token)};
    this.serverAuth.addToken(newToken).subscribe(data=>{
      
      this.token.push(data);
    });
  }
  public addUserLogin(usern:any, mail: any){
    const newUser = {username:usern, email: mail };
    this.serverAuth.addUserLogin(newUser).subscribe(data=>{
      
      this.userlogin.push(data);
    });
  }
  */

