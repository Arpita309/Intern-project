
const express = require('express'),
http = require('http');
const morgan = require('morgan');
const cors=require('cors')
const path=require('path')
const passport = require("passport");
const stripe=require('stripe')('sk_test_51Gye5bDuX2TrUjLdIr15WLxqhu6iSD4BI0JHnTB5aUG59Iou0rXy1S5d9bOjolPKXWlu1kNcCRwOwSRhhlf0mZ4E00y5UiVxip')
const uuid = require("uuid/v4");
require('dotenv').config()
//confusion-server
var session = require('express-session');
const Razorpay = require('razorpay')
var razorpay = new Razorpay({
  key_id: 'rzp_test_abGPkyLg8rUCDC',
  key_secret: 'RoFTJM8DsNhNooBuiOaT2vl3'
})
var keys=require('./config/keys')
const cookieSession = require('cookie-session');
//var cookieParser = require('cookie-parser');

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const dbUrl = process.env.DB_URL || "mongodb+srv://arpita_W3dev:7985714375@ar@cluster0-ond1z.mongodb.net/builderDb?retryWrites=true&w=majority";


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

const auth=require("./routes/users")
const teams=require("./routes/teamRouter")
const buildCard=require('./routes/buildCardRouter')
const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use(morgan('dev'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: "5mb",
  extended: false
}));
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());
const authenticate = require('./authenticate');


//app.use(cookieParser('12345-67890-09876-54321'));

/*app.use(session({
   name: 'session-id',
   secret: '12345-67890-09876-54321',
   saveUninitialized: false,
   
 }));*/

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

app.use("/auth", auth);
app.use("/teams", teams);
app.use("/buildcard",buildCard);
app.post("/payment", (req, res) => {
  
  
  
  const idempontencyKey = uuid();
  stripe.customers.create({
    name:req.body.card.name,
      source: req.body.id 
  }).then(function(customer) {
    
    return stripe.charges.create(
      {
        amount: 2000,
        currency: 'inr',
        customer: customer.id,
        shipping:{
          name:customer.name
        }
      },{
        idempotencyKey: idempontencyKey
      }
    );
  }).then(function(charge) {
    console.log(charge)
    res.status(200).json(charge)
  }).catch(function(err) {
    // Deal with an error
  });

   /*stripe.customers
    .create({
      name:req.body.card.name,
      source: req.body.id
    })
    .then(customer =>
      stripe.charges.create(
        {

         amount:100,
          currency: "inr",
          customer: customer.id,
          source:customer.source,
         
          shipping: {
            name:req.body.card.name,
            
          }
        },
        { idempontencyKey })
        
)
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));*/
});
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
