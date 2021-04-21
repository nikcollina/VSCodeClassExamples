import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentCommunication';
  parentName:string="";
  childAge?:number;
  products:Array<String> = new Array;
  passName(name:any){
    this.parentName = name;
  }
  addProduct(prod:any){
    this.products.push(prod)
  }
}
