
const express = require('express'),
http = require('http');
const morgan = require('morgan');
const cors=require('cors')
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const dbUrl = process.env.DB_URL || "mongodb+srv://arpita_W3dev:7985714375@ar@cluster0-ond1z.mongodb.net/builderDb?retryWrites=true&w=majority";

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
const uri=dbUrl;

 // mongoose.connect(uri, {
 // useNewUrlParser: true
//});
const connect = mongoose.connect(uri, {
    useNewUrlParser : true
    /* other options */
  });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.error(err); });


app.use('/question-row',questionRouter);
app.use('/app-row',appRouter);
/*app.use((req, res, next) => {




    

  // perform actions on the collection object
  
});*/


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
