const express = require('express');
const mongodb = require('mongodb');

// const PORT = process.env.PORT;
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const app = express();
const uri = "mongodb://mongo/node-docker-app";

app.get('/', (req, res) => {
    mongodb.MongoClient.connect(uri, function(err, db){
        if (err) return console.log("error connecting with mongodb: " + err); 
        db.collection.find().toArray(function(err,result){
            if(err) return console.log("error reading mongodb data: " + err); 
            res.send(result);
        });
    });    
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);