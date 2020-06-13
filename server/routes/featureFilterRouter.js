

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const FeatureFilters= require('../models/featureFilter');

const FeatureFiltersRouter = express.Router();



FeatureFiltersRouter.use(bodyParser.json());

FeatureFiltersRouter.route('/')

.get((req,res) => {
    FeatureFilters.find(req.query)
   .then((FeatureFilters) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(FeatureFilters);
    })
})
.post( (req, res) => {
    FeatureFilters.create(req.body)
    .then((FeatureFilter) => {
        console.log( FeatureFilter);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(FeatureFilter);
    })
});



module.exports = FeatureFiltersRouter;