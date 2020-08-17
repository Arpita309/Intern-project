

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const BundleDetails = require('../models/bundleDetails');

const BundleDetailsRouter = express.Router();



BundleDetailsRouter.use(bodyParser.json());

BundleDetailsRouter.route('/')

.get((req,res) => {
    BundleDetails.find(req.query)
    .populate('features')
   .then((BundleDetails) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(BundleDetails);
    })
})
.post( (req, res) => {
    BundleDetails.create(req.body)
    .then((BundleDetail) => {
        console.log(BundleDetail);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(BundleDetail);
    })
});



module.exports =BundleDetailsRouter;