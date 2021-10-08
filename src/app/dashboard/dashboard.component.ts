import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { Router } from "@angular/router";
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
import { GrafanaOAuthService } from '../Services/grafana-oauth.service';
import { CookieService } from 'ngx-cookie-service';

declare  var jQuery:  any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public innerWidth: any;
  public innerHeight: any;
  private accessToken: any;
  private url1 ="http://172.29.65.199:4200/"
  @ViewChild('iframe') iframe!: ElementRef;
  // init_url:SafeResourceUrl = "http://172.29.65.199/d/MFmXcoR7k/new-dashboard?orgId=1&from=now%2Fd&to=now%2Fd&var-show_value=data_out&var-value_above=10000&refresh=5s";
  init_url:SafeResourceUrl = "http://172.29.65.199/dashboard/script/scripted.js?orgId=1&refresh=5s&from=1609434000000&to=1625734491307";
  constructor(public sanitizer:DomSanitizer,private router: Router,  private http: HttpClient,private serverAuth: GrafanaOAuthService,private cookieService: CookieService, private authService: AuthService) { }

  
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.init_url = this.sanitizer.bypassSecurityTrustResourceUrl( "http://172.29.65.199/dashboard/script/scripted.js?orgId=1&refresh=5s&from=now%2Fd&to=now%2Fd&kiosk=tv");

    this.accessToken = this.cookieService.get('accesstoken')
    const headers = { 'Authorization': 'Bearer ' + this.accessToken}
    this.http.get<any>('http://172.29.65.195:8080/user', {headers}).subscribe({
      next: data => {
        
      },
      error: error => {
          console.error('There was an error!', error);
          (function ($) {
            console.log(1);
            $('iframe').attr("src","http://172.29.65.199/logout")
           
          })(jQuery);
          localStorage.clear();
          localStorage.setItem('isLoggedIn','false'); 
          this.cookieService.delete('accesstoken'); 
          this.router.navigate(['/signin']); 
          window.location.href = this.url1; 
      }
  })
    
    
    
  }

  OnClickIframe(): void {
    const nativeEl = this.iframe.nativeElement;
    const nativeEl1 = this.iframe.nativeElement.innerHTML;
    console.log("passsssssss")
    console.log("nativeEl",nativeEl)
    console.log("nativeEl1",nativeEl1)
  }

  ngAfterViewInit(): void{

    
    var mainURL = window.location.href;

    let iframe  = document.getElementById("dashboard") ;






    (function ($) {

      $(document).ready(function(){
        //console.log("Hello from jQuery!");



        let locationValue = new URL("http://172.29.65.199/dashboard/script/scripted.js?orgId=1&refresh=5s&from=now%2Fd&to=now%2Fd&kiosk=tv");
        let winURL = new URL(mainURL);
        if(winURL.search == ""){
          window.location.href = mainURL + locationValue.search;
          //console.log('null');
          
        }
        else{
          //console.log(winURL.search);
          let new_url = "http://172.29.65.199/dashboard/script/scripted.js" + winURL.search;
          $("#dashboard").attr('src',new_url);
          //console.log($("#dashboard")[0].contentWindow.document.querySelector("div[id='reactRoot']"));
          
        }

        window.addEventListener("message", function (event) {
          //console.log(event.data);
          let locationValue = new URL(event.data);
          //console.log(winURL.origin + winURL.pathname);
          if (window.location.href == "http://172.29.65.199/dashboard/script/scripted.js?orgId=1&refresh=5s&from=now%2Fd&to=now%2Fd&kiosk=tv") {
            
          }
          if(window.location.href != (winURL.origin + winURL.pathname + locationValue.search)){
            console.log(event.data);

            let nextState = "change URL";
            let nextTitle = "change URL";
            let nextURL = winURL.origin + winURL.pathname + locationValue.search;
            window.history.replaceState(nextState, nextTitle, nextURL);
          }
          

        }, false);
      //console.log(locationValue.search);

        
      });
    })(jQuery);
  }

}
