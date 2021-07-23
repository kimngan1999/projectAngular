import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-filter-variable',
  templateUrl: './filter-variable.component.html',
  styleUrls: ['./filter-variable.component.css']
})
export class FilterVariableComponent implements OnInit {
  public innerWidth: any;
  public innerHeight: any;

  public datalist =['40000', '50000', '60000', '70000', '80000', '90000', '100000']; 
  public url:string = "http://172.29.65.193:3000/d-solo/jw8yQzW7z/dashboard-data_links?orgId=1&var-data_out=60000&from=1623997080000&to=1623997739000&panelId=2"
  public urlSafe: SafeResourceUrl ="";
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  onChange(data:any) {
    
    var str = "http://172.29.65.193:3000/d-solo/jw8yQzW7z/dashboard-data_links?orgId=1&var-data_out="+data.target.value+"&from=1623997080000&to=1623997739000&panelId=2"
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(str);
    

  }
}
