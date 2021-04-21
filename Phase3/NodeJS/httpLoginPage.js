let http = require('http');
let url = require('url');
let port = 9999;
let loginInfo = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="http://localhost:9999" method = 'get'>
        <label for="">Username</label>
        <input type="text" name="user" id="">
        <label for="">Password</label>
        <input type="password" name ="pass">
        <input type="submit" value="Sign In!">
        <input type="reset">
    </form>
</body>
</html>
`
let server = http.createServer((req,res)=>{
    var data = url.parse(req.url,true).query;
    if (req.url=='/'){
        res.write(loginInfo);
    }
    else if (data.user=="Nik" && data.pass == "pass"){
        res.write("Successful Login")
    }
    else{
        res.write("Failure try again")
    }
    res.end()
})

server.listen(port,()=>console.log(`Running Port # ${port}`))