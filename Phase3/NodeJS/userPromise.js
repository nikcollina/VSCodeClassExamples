var obj = new Promise((resolve,reject)=>{
    resolve("Promise resolved..."),
    reject("Error generated")
});

//obj.then(res=>console.log("Resolve")).catch(error=>console.log("rejected"));
obj.then(res=>console.log(res)).catch(error=>console.log("rejected"));