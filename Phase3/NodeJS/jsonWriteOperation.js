let fs = require("fs");
var empObj = '{"id":100,"name":"Ravi","salary":12000}';
var empJson = JSON.parse(empObj);
console.log("id is "+empJson.id);
var empString = JSON.stringify(empJson);
fs.writeFile("emp.json",empString,(err)=>{
    if(!err){
        console.log("Record stored successfully...")
    }
})