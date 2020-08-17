

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Speeds  = require('../models/speed');

const SpeedsRouter = express.Router();



SpeedsRouter.use(bodyParser.json());

SpeedsRouter.route('/')

.get((req,res) => {
    Speeds.find(req.query)
   .then((Speeds) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Phases);
    })
})
.post( (req, res) => {
    Speeds.create(req.body)
    .then((Speed) => {
        console.log(Speed);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Speed);
    })
});



module.exports = SpeedsRouter;