let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
    
    if (!err){
        let db = client.db("meanstack");
        db.collection("Product").insertOne({_id:102,pname:"Laptop",price:850},(err,result)=>{
            if (!err){
                console.log(result.insertedCount);
            }
            else{
                console.log(err);
            }
            client.close();
        })
    }
    else{
        console.log("Error: "+err);
    }
})