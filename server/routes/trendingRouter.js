

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const TrendingApps = require('../models/trending');

const TrendingAppsRouter = express.Router();



TrendingAppsRouter.use(bodyParser.json());

TrendingAppsRouter.route('/')

.get((req,res) => {
    TrendingApps.find(req.query)
   .then((TrendingApps) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(TrendingApps);
    })
})
.post( (req, res) => {
    TrendingApps.create(req.body)
    .then((TrendingApp) => {
        console.log(TrendingApp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(TrendingApp);
    })
});



module.exports = TrendingAppsRouter;