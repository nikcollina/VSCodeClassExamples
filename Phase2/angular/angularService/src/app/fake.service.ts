import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable, Subscriber } from "rxjs";
import { Fake } from "./fake.model";
@Injectable()           // class obj creation taken care of by angular
export class FakeService {
    constructor(public http:HttpClient){} //DI for HttpClient
    SayHello():string{
        return "Welcome to User Defined Service with DI";
    }

    /*loadFakeData(){
        this.http.get("https://jsonplaceholder.typicode.com/todos").
        subscribe(data=>console.log(data),
        error=>console.log("Error Generated"+error),
        ()=>console.log("Completed"));
        
    }*/
    loadFakeData():Observable<Fake[]> {
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }
}