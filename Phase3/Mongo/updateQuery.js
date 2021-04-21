let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
    
    if (!err){
        let db = client.db("meanstack");
        db.collection("Product").updateOne({_id:101},{$set:{price:1050}},(err,result)=>{
            if (!err){
                //console.log(result);
                if(result.modifiedCount>0){
                    console.log("Updated Successfully")
                }
                else{
                    console.log("Didn't Update")
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