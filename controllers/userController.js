const User = require('../models/userModel');

exports.getAllUser = async (req, res, next) =>{
    try {
        const user = await User.find();
        
        res.status(200).json({user});
    } catch (err) {
        res.status(401).json({message:err})
    }
}