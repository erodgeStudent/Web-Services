const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const mongodb = require('./db/connect');

const professionalRoutes = require('./routes/professional');

const app = express ();

const  port = process.env.PORT || 8080;

app
    .use(bodyParser.json())
    .use(express.json())
    .use((req , res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
        })
        .use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb)=> {
    if(err){
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log("Server Listening on port: ", port);
        });
    }
})




// //define endpoint
// app.get("/status", (request, response) =>{
//     const status = {
//         "Status": "Running"
//     };
//     //define response to return
//     response.send(status);
// });

