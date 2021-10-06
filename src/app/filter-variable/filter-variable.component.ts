import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from "@angular/router";
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { GrafanaOAuthService } from '../Services/grafana-oauth.service';
import { CookieService } from 'ngx-cookie-service';

declare var jQuery: any;
@Component({
  selector: 'app-filter-variable',
  templateUrl: './filter-variable.component.html',
  styleUrls: ['./filter-variable.component.css']
})
export class FilterVariableComponent implements OnInit {
  public innerWidth: any;
  public innerHeight: any;
  private accessToken: any;
  public datalist =['40000', '50000', '60000', '70000', '80000', '90000', '100000']; 
  public url:string = "http://172.29.65.195:8088/d-solo/jw8yQzW7z/dashboard-data_links?orgId=1&var-data_out=60000&from=1623997080000&to=1623997739000&panelId=2"
  public urlSafe: SafeResourceUrl ="";
  private url1 ="http://172.29.65.195:4200/"
  constructor(public sanitizer: DomSanitizer,private router: Router,  private http: HttpClient,private serverAuth: GrafanaOAuthService,private cookieService: CookieService, private authService: AuthService) { }

  ngOnInit(): void {
    this.accessToken = this.cookieService.get('accesstoken')
    const headers = { 'Authorization': 'Bearer ' + this.accessToken}
    this.http.get<any>('http://172.29.65.195:8080/user', {headers}).subscribe({
      next: data => {
        
      },
      error: error => {
          console.error('There was an error!', error);
          (function ($) {
            console.log(1);
            $('iframe').attr("src","http://172.29.65.195:8088/logout")
           
          })(jQuery);
          localStorage.clear();
          localStorage.setItem('isLoggedIn','false'); 
          this.cookieService.delete('accesstoken'); 
          this.router.navigate(['/signin']); 
          window.location.href = this.url1; 
      }
  })


    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  onChange(data:any) {
    
    var str = "http://172.29.65.195:8088/d-solo/jw8yQzW7z/dashboard-data_links?orgId=1&var-data_out="+data.target.value+"&from=1623997080000&to=1623997739000&panelId=2"
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(str);
    

  }
}
