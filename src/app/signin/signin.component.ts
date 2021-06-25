import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public formSignIn = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(5),]),
    psw: new FormControl('',[Validators.minLength(3), Validators.maxLength(20),]),
    remember: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSignIn(){
    
    console.log('username: ' + this.formSignIn.controls.uname.value + ' password:'+ this.formSignIn.controls.psw.value);
    
  }

}
