

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Platforms = require('../models/platform');

const PlatformsRouter = express.Router();



PlatformsRouter.use(bodyParser.json());

PlatformsRouter.route('/')

.get((req,res) => {
    Platforms.find(req.query)
   .then((Platforms) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Platforms);
    })
})
.post( (req, res) => {
    Platforms.create(req.body)
    .then((Platform) => {
        console.log( Platform);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Platform);
    })
});



module.exports = PlatformsRouter;