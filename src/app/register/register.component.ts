import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  titleReClass = "titleclass";
  containerClass = "container";
  containerSignClass = "container signin";
  registerClass = "formRegister"

  public registerForm  = new FormGroup({
    fullname: new FormControl('',[Validators.required,
      Validators.minLength(5)]),
    email: new FormControl('',[Validators.required]),
    psw: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pswRepeat: new FormControl('',[Validators.required, Validators.minLength(3)]),
    male: new FormControl(''),

  });

  constructor() { }

  ngOnInit(): void {
  }
  onResgister(){
    console.log(this.registerForm.controls.fullname.value)
  }

}
