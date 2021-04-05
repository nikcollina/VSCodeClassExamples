/*console.log("Normal Statement 1st");
setTimeout(function() {
    console.log("Welcome to Asyn function using Node JS")
},2000);
setTimeout(()=>console.log("Asyn Function with arrow"),1000)
console.log("Normal Statement 2nd");
console.log("Normal Statement 3rd");*/

console.log("Normal Statement 1st");
setInterval(function() {
    console.log("Welcome to Asyn function using Node JS")
},2000);
setInterval(()=>console.log("Asyn Function with arrow"),1000)
console.log("Normal Statement 2nd");
console.log("Normal Statement 3rd");