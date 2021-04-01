import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean=false
  b1:string="switch to mdf"
  title = 'angularForms';

  change() {
    this.flag = !this.flag;
    this.b1 = (this.flag ? "switch to tdf" : "switch to mdf")
  }
}
