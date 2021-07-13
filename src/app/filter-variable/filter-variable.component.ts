import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-filter-variable',
  templateUrl: './filter-variable.component.html',
  styleUrls: ['./filter-variable.component.css']
})
export class FilterVariableComponent implements OnInit {
  public datalist =['40000', '50000', '60000', '70000', '80000', '90000', '100000']; 
  public url:string = "http://172.29.65.197:3000/d-solo/IUiQg2z7k/demo-dashboard?orgId=1&var-Servers=itpanther01&var-data=40000&from=1623997080000&to=1623997739000&panelId=4"
  public urlSafe: SafeResourceUrl ="";
  
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  onChange(data:any) {
    
    var str = "http://172.29.65.197:3000/d-solo/IUiQg2z7k/demo-dashboard?orgId=1&var-Servers=itpanther01&var-data="+data.target.value+"&from=1623997080000&to=1623997739000&panelId=4"
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(str);
    

  }
}
