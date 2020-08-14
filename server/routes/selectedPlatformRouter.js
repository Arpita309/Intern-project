const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const SelectedPlatforms = require('../models/selectedPlatforms');
var authenticate = require('../authenticate');



const SelectedPlatformsRouter = express.Router();

SelectedPlatformsRouter.use(bodyParser.json());

SelectedPlatformsRouter.route('/')

.get( (req,res,next) => {
    
    SelectedPlatforms.find({user: req.user._id})
    .populate('user')
    
    .then((SelectedPlatforms) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedPlatforms);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    SelectedPlatforms.find({user: req.user._id})
    .then((SelectedPlatform) => {
        if(SelectedPlatform){
            let features=[];let  id=''
            
            SelectedPlatform.map(value=>{
                if(value.templateId===req.body.templateId){
                    features=[...features,value.templateId]
                    id=value._id
                }
            })
            console.log('filtered',features)
            console.log('_id',id)
            if(features.length>0){
                SelectedPlatforms.findOne({_id:id}).then((Selected)=>{
                    console.log(Selected)
                    Selected.platforms=req.body.platforms
                    Selected.save()
                    .then((Feature) => {
                        console.log('SelectedFeatures Created ', Feature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(Feature);
                    }, (err) => next(err)); 
                    
                })}
                
                else {
                    SelectedPlatforms.create({"user": req.user._id,"platforms":req.body.platforms,"templateId":req.body.templateId})
                    .then((SelectedPlatform) => {
                        console.log( SelectedPlatform);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(SelectedPlatform);
                    }, (err) => next(err));
                }    
            }
        else {
            SelectedPlatforms.create({"user": req.user._id,"platforms":req.body.platforms,"templateId":req.body.templateId})
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
SelectedPlatformsRouter.route('/template')
.get( (req,res,next) => {
    console.log(req.query.templateId)
    SelectedPlatforms.findOne({user: req.user._id,templateId:req.query.templateId})
    .populate('user')
    
    .then((SelectedPlatforms) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedPlatforms);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = SelectedPlatformsRouter;