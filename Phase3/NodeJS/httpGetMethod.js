let http = require('http');
let url = require('url');
let port = 9999;
let server = http.createServer((req,res)=>{
    let urlDetails = req.url;
    let details = url.parse(urlDetails,true).query;
    var name = details.name;

    console.log(urlDetails);
    res.end("Welcome to Http Module " + name)
});

server.listen(port,()=>console.log(`Server running on port ${port}`));