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
    
    SelectedFeatures.find({user: req.user._id})
    .populate('user')
    
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    SelectedFeatures.find({user: req.user._id})
    .then((SelectedFeature) => {
        if(SelectedFeature){
            let features=[];let  id=''
            
            SelectedFeature.map(value=>{
                if(value.templateId===req.body.templateId){
                    features=[...features,value.templateId]
                    id=value._id
                }
            })
            console.log('filtered',features)
            console.log('_id',id)
            if(features.length>0){
                SelectedFeatures.findOne({_id:id}).then((Selected)=>{
                    console.log(Selected)
                    Selected.features=req.body.features,
                    Selected.title=req.body.title,
                    Selected.mvpFeature=req.body.mvpFeature
                    Selected.save()
                    .then((Feature) => {
                        console.log('SelectedFeatures Created ', Feature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(Feature);
                    }, (err) => next(err)); 
                    
                })}
                
                else {
                    SelectedFeatures.create({"user": req.user._id,"features":req.body.features,"templateId":req.body.templateId,"title":req.body.title,"mvpFeature":req.body.mvpFeature})
                    .then((SelectedFeature) => {
                        console.log( SelectedFeature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(SelectedFeature);
                    }, (err) => next(err));
                }    
            }
        else {
            SelectedFeatures.create({"user": req.user._id,"features":req.body.features,"templateId":req.body.templateId,'title':req.body.title,"mvpFeature":req.body.mvpFeature})
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
SelectedFeaturesRouter.route('/template')
.get( (req,res,next) => {
    console.log(req.query.templateId)
    SelectedFeatures.findOne({user: req.user._id,templateId:req.query.templateId})
    .populate('user')
    
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = SelectedFeaturesRouter;