const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const SelectedFeatures = require('../models/selectedFeatures');
var authenticate = require('../authenticate');
const SelectedFeaturesSchema = require('../models/selectedFeatures');


const SelectedFeaturesRouter = express.Router();

SelectedFeaturesRouter.use(bodyParser.json());

SelectedFeaturesRouter.route('/')

.get( (req,res,next) => {
    
    SelectedFeatures.findOne({user: req.user._id})
    .populate('user')
    
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    SelectedFeatures.findOne({user: req.user._id})
    .then((SelectedFeature) => {
        
        if (SelectedFeature) {
            if(SelectedFeature.templateId===req.body.templateId){
                console.log(SelectedFeature.templateId)
            SelectedFeature.features=req.body.features
            SelectedFeature.save()
            .then((SelectedFeature) => {
                console.log('SelectedFeatures Created ', SelectedFeature);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(SelectedFeature);
            }, (err) => next(err)); 
        }
        else {
            SelectedFeatures.create({"user": req.user._id,"features":req.body.features,"templateId":req.body.templateId})
            .then((SelectedFeature) => {
                console.log( SelectedFeature);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(SelectedFeature);
            }, (err) => next(err));
        }
    }
        
    }, (err) => next(err))
    .catch((err) => next(err));  
})
.put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorites');
})


module.exports = SelectedFeaturesRouter;