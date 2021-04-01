import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";

@Injectable()
export class MyAuthGuard implements CanActivate {
    canActivate(){
        //console.log("test")
        let obj = sessionStorage.getItem("token")
        if (obj == "123") {
            return true
        }
        else {
            return false;
        }
    }
}