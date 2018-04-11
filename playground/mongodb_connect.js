const Mongoclient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';
Mongoclient.connect(url ,(err,client)=>{
    if(err){
        return console.log('Unable to connect the mongodb server')
    }
    console.log('Connected mongo db server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:"Somting witn node js",
    //     completed:false
    // },(err,result) =>{
    //     if(err){
    //         return console.log(`ubale to insert ..some error is there --${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })


    db.collection("User").insertOne({
        name:'Visal kumar rao',
        age:19,
        location : "Berhampur"
    },(err,result)=>{

        if(err){
           return console.log(`Unabel to insert user model ${err}`);
        }
        console.log(JSON.stringify(result.ops ,undefined ,2));
    })

    client.close();
})
