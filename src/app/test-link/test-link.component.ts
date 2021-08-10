import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-link',
  templateUrl: './test-link.component.html',
  styleUrls: ['./test-link.component.css']
})
export class TestLinkComponent implements OnInit {
  public innerWidth: any;
  public innerHeight: any;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
