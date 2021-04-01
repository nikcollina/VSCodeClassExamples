let fs = require("fs"); 
//let msg = "Welcome to Node JS FS module to store data in file";
let msg = "\nSecond message with  Node JS FS module";
fs.writeFileSync("info.txt",msg);
console.log("file stored successfully")
console.log("done...")
console.log("done...")