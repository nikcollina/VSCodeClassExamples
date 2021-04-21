let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
    
    if (!err){
        let db = client.db("meanstack");
        let cursur = db.collection("Product").find();
        //console.log(cursur);
        cursur.each((err,doc)=>{
            if(!err){
                if(doc!=null){
                    console.log(doc);
                }
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