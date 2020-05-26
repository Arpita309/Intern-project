

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const AppRows  = require('../models/appPage');

const appRouter = express.Router();



appRouter.use(bodyParser.json());

appRouter.route('/')

.get((req,res) => {
    console.log(req.query)
    AppRows.find(req.query)
   .then((AppRows) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(AppRows);
    })
})
.post( (req, res) => {
    AppRows.create(req.body)
    .then((AppRow) => {
        console.log( AppRow);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(AppRow);
    })
});


module.exports = appRouter;