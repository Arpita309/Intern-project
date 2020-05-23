
const express = require('express'),
http = require('http');
const morgan = require('morgan');
const cors=require('cors')
const hostname = 'localhost';
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const question = require('./models/question');
const questionRouter=require('./routes/questionRouter')
const appRouter=require('./routes/approuter');

const app = express();
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
//const MongoClient = require('mongodb').MongoClient;
const uri="mongodb+srv://arpita_W3dev:7985714375@ar@cluster0-ond1z.mongodb.net/builderDb?retryWrites=true&w=majority"
 // mongoose.connect(uri, {
 // useNewUrlParser: true
//});
const connect = mongoose.connect(uri, {
    useNewUrlParser : true
    /* other options */
  });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


app.use('/question-row',questionRouter);
app.use('/app-row',appRouter);
/*app.use((req, res, next) => {




    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
    
    });*/
/*const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("builder-db").collection("question-row");
  
  
  const data= collection.find({}).toArray();
  data.then((docs)=>{console.log(docs)})

  app.get('/question-row',(req,res)=>{
    collection.find().toArray((error,result)=>{
        if(error)throw error;
        res.json(result)
    })
    
})

  // perform actions on the collection object
  
});*/




const server = http.createServer(app);

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
