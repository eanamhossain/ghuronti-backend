const User = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

//sign up
exports.signUp = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 11)
        const {name, username, email, password, sells} = req.body;
        const user = await User.create({
            name,
            username,
            email,
            password,
            sells
        });
        res.status(200).json({
            message:"Account created successfully",
            user
        })
    } catch (err) {
        res.status(401).json({message: "something Went Wrong"});
    }
}

//login 
exports.login = async (req, res, next) => {
   const {username, password} = req.body;
   try{
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({message: "Wrong Cridential!"})
        }
        const validated = await bcrypt.compare(password, user.password);
        if(!validated){
            return res.status(400).json({
                message:"Password Doesn't Match"
            })
        }

        const token = await jwt.sign({username, _id: user._id}, process.env.PRIVATE_KEY, {expiresIn:"2h"})
        res.status(200).json({
            message:"Login Success",
            user,
            token
        })
   }catch (err){
        res.status(401).json({message:"User Not Found!"})
   }
}
