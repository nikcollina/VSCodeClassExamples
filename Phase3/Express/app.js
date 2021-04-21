let express = require('express');
let app = express();
let port = 9090;

app.get("/",(req,res)=>{
    res.send("Welcome to Express Module");
});
app.get("/aboutus",(req,res)=>{
    res.send("Welcome to About Us");
});app.get("/contactus",(req,res)=>{
    res.send("Welcome to Contact Us");
});app.get("/login",(req,res)=>{
    res.send("Welcome to Login");
});

app.listen(port,()=>console.log(`Listening on Port Number: ${port}`));