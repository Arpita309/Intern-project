

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Categories  = require('../models/categories');

const CategoryRouter = express.Router();



CategoryRouter.use(bodyParser.json());

CategoryRouter.route('/')

.get((req,res) => {
     Categories.find(req.query)
   .then((Categories) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Categories);
    })
})
.post( (req, res) => {
    Categories.create(req.body)
    .then((Category) => {
        console.log(Category);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Category);
    })
});



module.exports = CategoryRouter;