import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {

  loginRef=new FormGroup({
    user: new FormControl(),
    pass: new FormControl(),
  });
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    //console.log("event")
    //console.log(this.loginRef.value)
    let user = this.loginRef.get("user").value
    let pass = this.loginRef.get("pass").value
    if (user=="Nik" && pass == "123") {
      this.msg="Successful Login"
    }
    else {
      this.msg="Unsuccessful Try Again"
    }
  }

}
