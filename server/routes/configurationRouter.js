

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Configurations = require('../models/configurations');

const ConfigurationsRouter = express.Router();



ConfigurationsRouter.use(bodyParser.json());

ConfigurationsRouter.route('/')

.get((req,res) => {
    Configurations.find(req.query)
   .then((Configurations) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Configurations);
    })
})
.post( (req, res) => {
    Configurations.create(req.body)
    .then((Configuration) => {
        console.log(Configuration);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Configuration);
    })
});



module.exports = ConfigurationsRouter;