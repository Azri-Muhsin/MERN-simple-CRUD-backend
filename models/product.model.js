const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
       name:{
        type:String,
        required:[true,"product name is a required field"],
       }, 

       quantity:{
        type:Number,
        required:[true,"product quantity is a required field"],
        default: 0,
       }, 

       price:{
        type:Number,
        required:[true,"product price is a required field"],
        default:0,
       }, 

       image:{
        type:String,
        required: false,
       },

    },
    {
        timestamps: true
    }


);
//leave the product model name as singulare becuase the db makes it plural on default
const Product = mongoose.model("Product",ProductSchema);
//exporting the model
module.exports = Product;