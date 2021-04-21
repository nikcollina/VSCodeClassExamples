let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
    
    if (!err){
        let db = client.db("meanstack");
        db.collection("Product").deleteOne({_id:102},(err,result)=>{
            if (!err){
                //console.log(result);
                if(result.deletedCount>0){
                    console.log("Deleted Successfully")
                }
                else{
                    console.log("Record Not Present")
                }
            }
            else{
                console.log(err)
            }
            client.close()
        })
    }
    else{
        console.log("Error: "+err);
    }
})