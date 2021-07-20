import { NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServerHttpService } from '../Services/server-http.service';
import { Router } from "@angular/router";

import { AuthService } from '../Services/auth.service';




@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  public users: any[] = [];
  public user: any= "";
  
  public isLogin = false;

  isLoggedIn = false;

  public formSignIn = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(1),]),
    psw: new FormControl('',[Validators.minLength(3), Validators.maxLength(20),]),
    remember: new FormControl(''),
  });

  constructor(  private serverHttp: ServerHttpService,private router: Router, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.serverHttp.getUsers().subscribe(data=>{
      this.users = data;
    });


  }
    onSubmit(){
   
    var fname = this.formSignIn.controls.uname.value;
    var fpass = this.formSignIn.controls.psw.value;
    for (var key in this.users) {
    
      if (fname == this.users[key].username && fpass == this.users[key].password) { 
        localStorage.setItem('isLoggedIn', 'true');  
        localStorage.setItem('token', this.users[key].username);         
        this.isLogin = true;
       
        this.user = this.users[key] ;

        this.router.navigateByUrl("/home");
        // this.onLoginGrafana(this.users[key].username, this.users[key].password);
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

  public onLoginGrafana(us: any, ps: any){
    console.log("shdsh"+us +"pass: "+ ps)
    const uers = {username: us , password: ps};
    console.log("sfsddsz"+uers.username);
    this.serverHttp.loginGrafana(uers).subscribe(data=>{
      console.log('addUsername', data);

    });
  }
}
