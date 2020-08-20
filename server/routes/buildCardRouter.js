const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const BuildCards = require('../models/buildCard');



const BuildCardsRouter = express.Router();

BuildCardsRouter.use(bodyParser.json());

BuildCardsRouter.route('/')

.get( (req,res,next) => {
    
    BuildCards.find({user: req.user._id})
    .populate('user')
    .populate('template')
    .populate('platforms')
    .populate('phase')
    .populate('workSpeed')
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
   
            BuildCards.create({"user": req.user._id,"phases":req.body.phases,"templateId":req.body.templateId,"teamLocation":req.body.teamLocation,"platformIDs":req.body.platforms,"speed":req.body.speed,"price":req.body.price,"duration":req.body.duration,"projectName":req.body.projectName,"projectType":req.body.projectType,"features":req.body.features,"status":req.body.status,"uniqId":req.body.uniqId})
            .then((SelectedFeature) => {
                console.log( SelectedFeature);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(SelectedFeature);
            }, (err) => next(err)); 
})
.put((req, res, next)=> {

    BuildCards.updateOne({uniqId:req.body.uniqId},{$set:{projectName:req.body.projectName,status:req.body.status,projectType:req.body.projectType,features:req.body.features}}
    , {
        new: true
    })
    .then((card) => {
        console.log(card)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(card);
    }, (err) => next(err))
    .catch((err) => next(err));
})
BuildCardsRouter.route('/template')
.get( (req,res,next) => {
    BuildCards.find({user: req.user._id,}).sort({"_id": -1}).limit(1)
    .populate('user')
    .populate('template')
    .populate('platforms')
    .populate('phase')
    .populate('workSpeed')
    .then((SelectedFeatures) => {
        /*SelectedFeatures.platforms.map(value=>{
            SelectedFeatures.featuresPrice = +SelectedFeatures.featuresPrice +  +SelectedFeatures.featuresPrice* +value.price_multiplier,
            SelectedFeatures.featuresDuration= +SelectedFeatures.featuresPrice + +SelectedFeatures.featuresDuration* +value.week_multiplier
         } )
        SelectedFeatures.phase.map(value=>{
            SelectedFeatures.featuresPrice = +SelectedFeatures.featuresPrice +  +SelectedFeatures.featuresPrice* +value.price_multiplier,
            SelectedFeatures.featuresDuration= +SelectedFeatures.featuresPrice + +SelectedFeatures.featuresDuration* +value.week_multiplier
        })
        SelectedFeatures.workSpeed.map(value=>{
            SelectedFeatures.featuresPrice= +SelectedFeatures.featuresPrice* +value.price_multiplier,
            SelectedFeatures.featuresDuration= +SelectedFeatures.featuresDuration* +value.week_multiplier
        })
        SelectedFeatures.save()*/
            console.log(SelectedFeatures)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(SelectedFeatures)    
        
      
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = BuildCardsRouter;