var num1 = [100, 200, 300, 400];
var num2 = new Array();
console.log("size " + num1.length);
console.log("size " + num2.length);
num1.push(500);
num1.push(600);
num1.push(700);
num2.push(100);
num2.push(200);
num2.push(300);
/*
console.log("size "+num1.length);
console.log("size "+num2.length);

console.log(num1);
console.log(num2);

num1.pop();
num2.pop();

console.log(num1);
console.log(num2);

num1.shift();
num2.shift();

console.log(num1);
console.log(num2);
*/
console.log(num1);
num1.splice(2, 2);
console.log(num1);
