import { NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ServerHttpService } from '../Services/server-http.service';
import { Router } from "@angular/router";

import { AuthService } from '../Services/auth.service';
import { GrafanaOAuthService } from '../Services/grafana-oauth.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  public token : any = "";
  public msg : any = "";
  isLoggedIn = false;
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
    this.serverAuth.login(fname,fpass)
  }

}
 

