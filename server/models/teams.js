const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const attributes=new Schema({
    "id": Number,
    "title":String,
    "description":String,
    "price_multiplier":String,
    "week_multiplier":String,
    "icon":String

},{_id:false})
const data=new Schema({
    "id": Number,
    "type":String,
    "attributes":attributes,
    "relationships": { }
  
},{_id:false})
const dataSchema=new Schema({
    "data":[data]
},{_id:false})
const all=new Schema({
    "all":dataSchema
},{_id:false})


const teamSchema=new Schema({
    "popular":all,
    "default":dataSchema,
    "current":dataSchema,
    "all":dataSchema

},{_id:false})
const teams=new Schema({
    "teams":teamSchema
})
 

var Teams = mongoose.model('Team',teams );

module.exports =Teams ;