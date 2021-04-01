import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {

  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:any) {
    //console.log("event")
    //console.log(loginRef)
    let user = loginRef.user;
    let pass = loginRef.pass;
    if(user=="Nik" && pass=="123"){
      this.msg="Successful Login";
    }
    else{
      this.msg="Failure Try Again";
    }
  }

}
