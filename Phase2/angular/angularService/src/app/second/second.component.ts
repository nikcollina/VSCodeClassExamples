import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { MyService } from '../myCustomService';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  //providers: [FakeService]
})
export class SecondComponent implements OnInit {
  msg1:string = ""
  msg2:string = ""
  constructor(public service:FakeService) { }

  ngOnInit(): void {
  }

  fun(){
    let obj = new MyService();
    this.msg1 = obj.sayHello();
  }
  display(){
    this.msg2 = this.service.SayHello();
  }

}
