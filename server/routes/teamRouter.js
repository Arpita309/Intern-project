

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Teams = require('../models/teams');

const TeamsRouter = express.Router();



TeamsRouter.use(bodyParser.json());

TeamsRouter.route('/')

.get((req,res) => {
    Teams.find(req.query)
   .then((Teams) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Teams);
    })
})
.post( (req, res) => {
    Teams.create(req.body)
    .then((Team) => {
        console.log(Team);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Team);
    })
});



module.exports =TeamsRouter;