

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const BillingDetails  = require('../models/billingDetail');

const BillingDetailsRouter = express.Router();



BillingDetailsRouter.use(bodyParser.json());

BillingDetailsRouter.route('/')

.get((req,res) => {
    BillingDetails .find(req.query)
   .then((BillingDetails) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(BillingDetails);
    })
})
.post( (req, res) => {
    BillingDetails.create(req.body)
    .then((BillingDetail) => {
        console.log( BillingDetail);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(BillingDetail);
    })
});



module.exports = BillingDetailsRouter;