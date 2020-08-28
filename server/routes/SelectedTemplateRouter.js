

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Templates = require('../models/selectedTemplates');

const TemplatesRouter = express.Router();



TemplatesRouter.use(bodyParser.json());

TemplatesRouter.route('/')

.get( (req,res,next) => {
    
    Templates.find({user: req.user._id}).sort({"_id": -1}).limit(1)
    .populate('user')
    .populate('templates')
    .then((SelectedFeatures) => {
        console.log(SelectedFeatures)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    Templates.find({user: req.user._id})
    .then((SelectedFeature) => {
        console.log(SelectedFeature)
        if(SelectedFeature.length){
            Templates.findOne().sort({"_id":-1}).then((Selected)=>{
                    console.log(Selected)
                    Selected.templateId=req.body.templateId
                    Selected.save()
                    .then((Feature) => {
                        console.log('SelectedFeatures Created ', Feature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(Feature);
                    }, (err) => next(err)); 
                    
                })}
                
                
        else {
            Templates.create({"user": req.user._id,"templateId":req.body.templateId})
            .then((SelectedFeature) => {
                console.log( SelectedFeature);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(SelectedFeature);
            }, (err) => next(err));
        }
        
        
        
    
        
    }, (err) => next(err))
    .catch((err) => next(err));  
});


module.exports =TemplatesRouter;