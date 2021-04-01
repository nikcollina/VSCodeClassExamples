import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { MyService } from '../myCustomService';
import { Fake } from '../fake.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  //providers:[FakeService]    // register on comonenet level
})
export class FirstComponent implements OnInit {

  fakeData:Array<Fake>=[];
  msg1:string=""
  msg2:string=""
  constructor(public service:FakeService) { } // DI pull object from container

  ngOnInit(): void {
    this.service.loadFakeData().subscribe(data=> this.fakeData=data);
  }

  fun() {
    let obj = new MyService(); // created obj
    this.msg1=obj.sayHello();
  }
  display() {
    this.msg2 = this.service.SayHello();
  }

  callFakeService(){
    this.service.loadFakeData().subscribe(data=>this.fakeData=data);
  }

}
