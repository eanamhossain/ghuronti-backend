const Product = require('../models/productModel');

exports.addProduct = async (req, res, next) => {
    const { name , timeSpan, moneyDown, fixUpCost, monthlyCost, firstBed, secondBed, thirdBed, fourthBed} = req.body;

    try {
        const product = await Product.create({
            name,
            timeSpan,
            moneyDown,
            fixUpCost,
            monthlyCost,
            firstBed,
            secondBed,
            thirdBed,
            fourthBed 
        })

        res.status(200).json({
            message: 'Product added successfully',
            product
        })
    }catch(err){
        res.status(401).json({message: "Wrong Product"});
    }
}