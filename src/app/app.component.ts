import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  classNav = "nav";
  rearchClass = "search"
  title = 'projectAngular';
  navRightClass ="navRightClass"
  rowClass = "row";
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log(123456);
    
    
  }
}
