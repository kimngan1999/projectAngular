import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { GrafanaOAuthService } from '../Services/grafana-oauth.service';
import { CookieService } from 'ngx-cookie-service';

declare var jQuery: any;
@Component({
  selector: 'app-test-link',
  templateUrl: './test-link.component.html',
  styleUrls: ['./test-link.component.css']
})
export class TestLinkComponent implements OnInit {
  public innerWidth: any;
  public innerHeight: any;
  private accessToken: any;
  private url1 ="http://172.29.65.193:4200/"
  constructor(private router: Router,  private http: HttpClient,private serverAuth: GrafanaOAuthService,private cookieService: CookieService, private authService: AuthService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.accessToken = this.cookieService.get('accesstoken')
    const headers = { 'Authorization': 'Bearer ' + this.accessToken}
    this.http.get<any>('http://172.29.65.193:8088/user', {headers}).subscribe({
      next: data => {
        
      },
      error: error => {
          window.open("http://172.29.65.193:8088/logout")
          localStorage.clear();
          localStorage.setItem('isLoggedIn','false'); 
          this.cookieService.delete('accesstoken'); 
          this.router.navigate(['/signin']); 
          window.location.href = this.url1; 
      }
  })
  }

}
