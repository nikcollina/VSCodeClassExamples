let fs = require("fs");
let data = fs.readFileSync("info.txt")
console.log(data.toString())