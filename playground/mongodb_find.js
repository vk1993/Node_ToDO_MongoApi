const Mongoclient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017/TodoApp";

Mongoclient.connect(url,(err,client) =>{
    if(err){
        return console.log(`Something went wrong it might couses this erro ${err}`);
    }
    console.log("Monogdb connected....");
    const db = client.db("TodoApp");
    
    // db.collection("Todos").find().toArray().then((docs) =>{
    //       console.log(JSON.stringify(docs,undefined,2));

    // },(err) =>{
    //     console.log(`unabel to fetch`);
    // });

    // db.collection("Todos").find({
    //     _id: new ObjectID("5acd12d8c18a112324f3b956")
    // }).toArray().then((docs) =>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) =>{
    //     console.log(err);
    // })
    db.collection("User").find({name:'Visal'}).toArray().then((docs) => {
        console.log(docs);
    }, (err) => {
        console.log(err);
    });    
})