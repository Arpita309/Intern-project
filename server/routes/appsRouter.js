

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Apps  = require('../models/apps');

const appsRouter = express.Router();



appsRouter.use(bodyParser.json());

appsRouter.route('/')

.get((req,res) => {
     Apps.find(req.query)
   .then((Apps) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Apps);
    })
})
.post( (req, res) => {
    Apps.create(req.body)
    .then((App) => {
        console.log( App);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(App);
    })
});



module.exports = appsRouter;