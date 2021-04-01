let fs = require("fs");
var msg = "This is asynchronous message store through FS module";
fs.writeFile("info1.txt",msg,(err)=>{
    if (!err){
        console.log("Data stored in file")
    }
})

console.log("done...")
console.log("done...")