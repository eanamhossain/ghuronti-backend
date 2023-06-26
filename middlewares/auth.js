const User = require('../models/userModel');

exports.authMiddleWare = async (req, res, next) => {
    try {
        
    }catch (err) {
        res.status(401).json({
            message:"Authentication failed!"
        })
    }
}