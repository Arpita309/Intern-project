const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


const SelectedData = require('../models/selectedData');
var authenticate = require('../authenticate');


const SelectedDataRouter = express.Router();

SelectedDataRouter.use(bodyParser.json());

SelectedDataRouter.route('/')

.get( (req,res,next) => {
    
    SelectedData.find({user: req.user._id})
    .populate('user')
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    SelectedData.find({user: req.user._id})
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
                SelectedData.findOne({_id:id}).then((Selected)=>{
                    console.log(req.body.speed)
                    Selected.phases=req.body.phases,
                    Selected.teamLocation=req.body.teamLocation,
                    Selected.platformIDs=req.body.platforms,
                    Selected.speed=req.body.speed
                    
                    Selected.save()
                    .then((Feature) => {
                        console.log('SelectedFeatures Created ', Feature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(Feature);
                    }, (err) => next(err)); 
                    
                })}
                
                else {
                    SelectedData.create({"user": req.user._id,"phases":req.body.features,"templateId":req.body.templateId,"teamLocation":req.body.teamLocation,"platformIDs":req.body.platforms,"speed":req.body.speed})
                    .then((SelectedFeature) => {
                        console.log( SelectedFeature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(SelectedFeature);
                    }, (err) => next(err));
                }    
            }
        else {
            SelectedData.create({"user": req.user._id,"phases":req.body.features,"templateId":req.body.templateId,"teamLocation":req.body.teamLocation,"platformIDs":req.body.platforms,"speed":req.body.speed})
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
SelectedDataRouter.route('/template')
.get( (req,res,next) => {
    SelectedData.findOne({user: req.user._id,templateId:req.query.templateId})
    .populate('user')
    .populate('template')
    .populate('platforms')
    .populate('phase')
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = SelectedDataRouter;