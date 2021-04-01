import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  fname:string="Nik";
  age:number=23
  skill:string=""
  constructor() {}

  ngOnInit(): void {
  }

  updateSkill(skillInfo){
    this.skill=skillInfo
  }
}
