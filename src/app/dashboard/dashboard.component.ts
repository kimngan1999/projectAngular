import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('iframe') iframe!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  OnClickIframe(): void {
    const nativeEl = this.iframe.nativeElement;
    const nativeEl1 = this.iframe.nativeElement.innerHTML;
    console.log("passsssssss")
    console.log("nativeEl",nativeEl)
    console.log("nativeEl1",nativeEl1)
  }

}
