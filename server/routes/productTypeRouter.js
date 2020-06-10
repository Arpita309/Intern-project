

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ProductTypes  = require('../models/productType');

const ProductTypeRouter = express.Router();



ProductTypeRouter.use(bodyParser.json());

ProductTypeRouter.route('/')

.get((req,res) => {
     ProductTypes.find(req.query)
   .then((ProductTypes) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(ProductTypes);
    })
})
.post( (req, res) => {
    ProductTypes.create(req.body)
    .then((ProductType) => {
        console.log( ProductType);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(ProductType);
    })
});



module.exports = ProductTypeRouter;