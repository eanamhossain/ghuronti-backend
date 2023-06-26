const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique: true,
    },
    timeSpan:{
        type: String,
        required:true,
    },
    moneyDown:{
        type: Number,
        required:true,
    },
    fixUpCost:{
        type: Number,
        required:true,
    },
    monthlyCost:{
        type: Number,
        required:true,
    },
    firstBed:{
        type: Number,
    },
    secondBed:{
        type: Number,
     
    },
    thirdBed:{
        type: Number,
   
    },
    fourthBed:{
        type: Number,  
    },
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;