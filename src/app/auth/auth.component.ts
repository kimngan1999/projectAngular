import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public url:any= "";
  private state: any
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.state = params['state'];
      console.log("state",this.state); // Print the parameter to the console. 
    });
      this.url = "http://172.29.65.197:3000/login/generic_oauth?state="+this.state +"";    
      window.location.href = this.url; 
  }
}
