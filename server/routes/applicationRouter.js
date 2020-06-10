

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Applications = require('../models/applications');

const ApplicationsRouter = express.Router();



ApplicationsRouter.use(bodyParser.json());

ApplicationsRouter.route('/')

.get((req,res) => {
     Applications.find(req.query)
   .then((Applications) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Applications);
    })
})
.post( (req, res) => {
    Applications.create(req.body)
    .then((Application) => {
        console.log( Application);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Application);
    })
});



module.exports = ApplicationsRouter;