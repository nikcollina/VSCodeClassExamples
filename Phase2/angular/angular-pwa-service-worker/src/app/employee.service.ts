import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  storeEmployee(emp:any){
    // post 2 parameters url and json data
    this.http.post("http://localhost:3000/employees",emp).subscribe(result=>console.log(result),error=>console.log(console.error));
  }
}
