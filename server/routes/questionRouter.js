

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const QuestionRows  = require('../models/question');

const questionRouter = express.Router();



questionRouter.use(bodyParser.json());

questionRouter.route('/')

.get((req,res) => {
    QuestionRows.find(req.query)
    .then((questionRows) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(questionRows);
    })
})
.post( (req, res) => {
    QuestionRows.create(req.body)
    .then((questionRow) => {
        console.log( questionRow);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(questionRow);
    })
});


module.exports = questionRouter;