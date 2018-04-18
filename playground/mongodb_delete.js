const Mongoclient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/TodoApp";

Mongoclient.connect(url,(err,client) =>{
    if(err){
        return console.log(`Something went wrong it might couses this erro ${err}`);
    }
    console.log("Monogdb connected....");
    const db = client.db("TodoApp");
    
    // //deletMany document in mongo
    // db.collection("Todos").deleteMany({completed: false}).then((result) =>{
    //     console.log(result.CommandResult.result.n);
    // });
  

    //DeleteOne

    // db.collection("Todos").deleteOne({ text:"Watch IPL"}).then((result) =>{
    //     console.log(result);
    // })

    //findOneAndDelete

    // db.collection("Todos").findOneAndDelete({completed: true}).then((result) =>{
    //     console.log(result);
    // })

    // db.collection("User").deleteMany({ name: "Visal" }).then((result) => {
    //     console.log(result)
    // });

    db.collection("User").findOneAndDelete({name : "Jitu"}).then((result) =>{
        console.log(`${result.value.name} your file is goingto delete`);
    })
})