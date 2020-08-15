const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const PriceAndDuration = require('../models/priceAndDuration');



const PriceAndDurationRouter = express.Router();

PriceAndDurationRouter.use(bodyParser.json());

PriceAndDurationRouter.route('/')

.get( (req,res,next) => {
    
    PriceAndDuration.find({user: req.user._id})
    .populate('user')
    .populate('Apps')
    .then((price) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(price);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    PriceAndDuration.find({user: req.user._id})
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
                PriceAndDuration.findOne({_id:id}).then((Selected)=>{
                    console.log(Selected)
                    Selected.price=req.body.price,
                    Selected.weeks=req.body.weeks
                    Selected.save()
                    .then((Feature) => {
                        console.log('SelectedFeatures Created ', Feature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(Feature);
                    }, (err) => next(err)); 
                    
                })}
                
                else {
                    PriceAndDuration.create({"user": req.user._id,"templateId":req.body.templateId,"price":req.body.price,"weeks":req.body.weeks})
                    .then((SelectedFeature) => {
                        console.log( SelectedFeature);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(SelectedFeature);
                    }, (err) => next(err));
                }    
            }
        else {
            PriceAndDuration.create({"user": req.user._id,"templateId":req.body.templateId,"price":req.body.price,"weeks":req.body.weeks})
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
PriceAndDurationRouter.route('/template')
.get( (req,res,next) => {
    console.log(req.query.templateId)
    PriceAndDuration.findOne({user: req.user._id,templateId:req.query.templateId})
    .populate('user')
    .populate('Apps')
    .then((SelectedFeatures) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(SelectedFeatures);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = PriceAndDurationRouter;