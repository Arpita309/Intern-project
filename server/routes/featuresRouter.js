

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Features  = require('../models/features');

const FeaturesRouter = express.Router();



FeaturesRouter.use(bodyParser.json());

FeaturesRouter.route('/')

.get((req,res) => {
    Features.find(req.query)
   .then((Features) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Features);
    })
})
.post( (req, res) => {
    Features.create(req.body)
    .then((Feature) => {
        console.log( Feature);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Feature);
    })
});



module.exports = FeaturesRouter;