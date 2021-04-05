let http = require("http");
let port  = 9999;
let htmlContent = `
        <html>
            <head></head>
            <body>
                <h1>Welcome to simple client server application</h1>
            </body>
        </html>
        `
let server = http.createServer((request, response)=>{
    console.log("Url "+request.url);
    console.log("Headers "+request.headers);
    console.log("Method "+request.method);
    response.end(htmlContent)
})

server.listen(port,()=>console.log(`Server running on port number ${port}`))
