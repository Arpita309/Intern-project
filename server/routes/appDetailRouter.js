

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const AppDetails = require('../models/appDetail');

const AppDetailsRouter = express.Router();



AppDetailsRouter.use(bodyParser.json());

AppDetailsRouter.route('/')

.get((req,res) => {
     AppDetails.find(req.query)
   .then((AppDetails) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(AppDetails);
    })
})
.post( (req, res) => {
    AppDetails.create(req.body)
    .then((AppDetail) => {
        console.log( AppDetail);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(AppDetail);
    })
});



module.exports = AppDetailsRouter;