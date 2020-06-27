const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const BuildCards = require('../models/buildCard');
const User=require('../models/user')
const App=require('../models/appDetail')


const BuildCardRouter = express.Router();

BuildCardRouter.use(bodyParser.json());

BuildCardRouter.route('/')

.get((req,res,next) => {
    BuildCards.findOne({_userID: req.user._id})
    .populate('User')
    .populate('App')
    .then((BuildCards) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(BuildCards);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    BuildCards.create(req.body)
            .then((BuildCard) => {
                console.log(BuildCard);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(BuildCard);
            }, (err) => next(err))
        
    
    .catch((err) => next(err));  
});





module.exports = BuildCardRouter;