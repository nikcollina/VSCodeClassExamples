let obj = require("readline-sync");
let fs = require("fs");

let num = obj.question("How many to store: ");
let emp = new Array(); 
for (let i=0; i < num; i++){
    let id = obj.question("Enter the id: ");
    let name = obj.question("Enter the name: ");
    let salary = obj.question("Enter the salary: ");
    let newEmp = {"id":id, "name":name,"salary":salary};
    emp.push(newEmp)
}
 let jsonData = JSON.stringify(emp)

fs.writeFileSync("employee.json", jsonData);
console.log('file written');

let data = fs.readFileSync("employee.json");
let jsonString = data.toString();
let anotherJSON = JSON.parse(jsonString);
console.log("Number of records are "+anotherJSON.length);
console.log(anotherJSON[0].id);
console.log(anotherJSON);