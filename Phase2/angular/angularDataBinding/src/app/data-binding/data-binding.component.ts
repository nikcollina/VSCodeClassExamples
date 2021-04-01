import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  fname:string="Nik";
  lname:string="Collina";
  age:number=21;
  skillInfo:string="";
  constructor() { }

  ngOnInit(): void {
  }

  fun():void {
    console.log("event fired...")
  }

  changeAge():void {
    this.age=23;
  }

  addSkill(skill:any):void {
    console.log("Skill is "+skill)
    this.skillInfo = skill;
  }
}
