const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        require: true
    },
    username:{
        type: String,
        trim: true,
        require: true,
    },
    email:{
        type: String,
        trim: true,
        require: true,
    },
    password:{
        type: String,
        trim: true,
        require: true,
    },
    sells: [{
        month: String,      // Month of the sell
        amount: Number      // Sell amount for the month
      }],

}, {
    timestamps: true,
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;