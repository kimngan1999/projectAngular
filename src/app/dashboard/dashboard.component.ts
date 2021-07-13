import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

declare  var jQuery:  any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public innerWidth: any;
  public innerHeight: any;

  @ViewChild('iframe') iframe!: ElementRef;
  // init_url:SafeResourceUrl = "http://172.29.65.197:3000/d/MFmXcoR7k/new-dashboard?orgId=1&from=now%2Fd&to=now%2Fd&var-show_value=data_out&var-value_above=10000&refresh=5s";
  init_url:SafeResourceUrl = "http://172.29.65.197:3000/dashboard/script/scripted.js?orgId=1&refresh=5s&from=1609434000000&to=1625734491307";
  constructor(public sanitizer:DomSanitizer) { }

  
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
    this.init_url = this.sanitizer.bypassSecurityTrustResourceUrl( "http://172.29.65.197:3000/dashboard/script/scripted.js?orgId=1&refresh=5s&from=now%2Fd&to=now%2Fd&kiosk=tv");
    //console.log(this.init_url);
    
    
    
    
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



        let locationValue = new URL("http://172.29.65.197:3000/dashboard/script/scripted.js?orgId=1&refresh=5s&from=now%2Fd&to=now%2Fd&kiosk=tv");
        let winURL = new URL(mainURL);
        if(winURL.search == ""){
          window.location.href = mainURL + locationValue.search;
          //console.log('null');
          
        }
        else{
          //console.log(winURL.search);
          let new_url = "http://172.29.65.197:3000/dashboard/script/scripted.js" + winURL.search;
          $("#dashboard").attr('src',new_url);
          //console.log($("#dashboard")[0].contentWindow.document.querySelector("div[id='reactRoot']"));
          
        }

        window.addEventListener("message", function (event) {
          //console.log(event.data);
          let locationValue = new URL(event.data);
          //console.log(winURL.origin + winURL.pathname);
          if (window.location.href == "http://172.29.65.197:3000/dashboard/script/scripted.js?orgId=1&refresh=5s&from=now%2Fd&to=now%2Fd&kiosk=tv") {
            
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
