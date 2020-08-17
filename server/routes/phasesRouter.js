

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Phases  = require('../models/phases');

const PhasesRouter = express.Router();



PhasesRouter.use(bodyParser.json());

PhasesRouter.route('/')

.get((req,res) => {
    Phases.find(req.query)
   .then((Phases) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Phases);
    })
})
.post( (req, res) => {
    Phases.create(req.body)
    .then((Phase) => {
        console.log(Phase);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Phases);
    })
});



module.exports = PhasesRouter;