
const express = require('express'),
http = require('http');
const morgan = require('morgan');
const cors=require('cors')
const path=require('path')
const passport = require("passport");
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const dbUrl = process.env.DB_URL || "mongodb+srv://arpita_W3dev:7985714375@ar@cluster0-ond1z.mongodb.net/builderDb?retryWrites=true&w=majority";

require("./config/passport")(passport);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const questionRouter=require('./routes/questionRouter')
const CategoryRouter=require('./routes/categoryRouter');
const appsRouter =require('./routes/appsRouter');
const productTypeRouter=require('./routes/productTypeRouter')
const ApplicationsRouter=require('./routes/applicationRouter')
const TrendingAppsRouter=require('./routes/trendingRouter')
const appDetailsRouter=require('./routes/appDetailRouter')
const configurationsRouter=require('./routes/configurationRouter')
const bundleDetailsRouter=require('./routes/bundleDetailRouter')
const featureFilter=require('./routes/featureFilterRouter')
const users = require("./routes/userRouter");
const app = express();
app.use(cors())
app.use(morgan('dev'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: "5mb",
  extended: false
}));

app.use(bodyParser.json({ limit: '5mb' }));

app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
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
app.use('/categories',CategoryRouter);
app.use('/apps',appsRouter);
app.use('/product-type',productTypeRouter);
app.use('/applications',ApplicationsRouter);
app.use('/trending',TrendingAppsRouter);
app.use('/app',appDetailsRouter);
app.use('/configurations',configurationsRouter)
app.use('/bundle',bundleDetailsRouter);
app.use('/filter',featureFilter);
app.use("/users", users);
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
