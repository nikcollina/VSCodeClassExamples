let http = require("http");
let port  = 9999;

let server = http.createServer((request, response)=>{
    if (request.url=="/aboutus"){
        response.write("Welcome to about us page")
    }
    else if (request.url=="/contactus"){
        response.write("Welcome to contact us page")
    }
    else if (request.url=="/login"){
        response.write("Welcome to login page")
    }
    else {
        response.write("404 Page not found")
    }
    response.end()
})

server.listen(port,()=>console.log(`Server running on port number ${port}`))
