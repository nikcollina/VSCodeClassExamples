/*var obj = require("util");
let name="Nik Collina";
let age=23;
var formatName = obj.format("My name is %s and age is %d",name,age);
console.log(`My name is ${name} and my age is ${age}`)
console.log(formatName);*/
/*
var util = require("util")
var n = 10;
var obj = new Date();
console.log(util.isPrimitive(n));
console.log(util.isObject(obj));
console.log(util.isString("Nik"));
console.log(util.isString(n));*/

var util = require("util")
var fs = require("fs")
var empInfo = require("./empInfo");

let emp1 = {"id":100,"name":"Ravi"};
console.log(util.inspect(empInfo,{showHidden:true}))
console.log(util.inspect(fs))