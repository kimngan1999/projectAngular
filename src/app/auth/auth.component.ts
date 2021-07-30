import { Component, OnInit } from '@angular/core';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  // public state:any = this.router.routerState;

  public url:any= "";
  public state:any ="";

  constructor(private router: Router, private location: Location, state: RouterStateSnapshot) { }

  ngOnInit(): void {

    this.state =  this.state.url;
    console.log("sdzdvfd");
    console.log( this.state);
    this.state = encodeURIComponent(this.state);
      this.url = "http://localhost:3000/login/generic_oauth?state="+ this.state +"&code=cc536d98d27750394a87ab9d057016e636a8ac31";    
      this.location.go(this.url);     
  }
}
