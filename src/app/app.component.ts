import { Component, Input } from '@angular/core';
// import { ApiService } from "../app/Services/api.service";
import { ServerHttpService } from '../app/Services/server-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  classNav = "nav";
  rearchClass = "search"
  title = 'projectAngular';
  navRightClass ="navRightClass"
  rowClass = "row";

  constructor() { }
  
  ngOnInit(): void {

 
  }
 
}
