const { addProduct } = require('../controllers/productListControllers');

const addProductRoute = require('express').Router();

addProductRoute.post("/addproduct", addProduct);

module.exports = addProductRoute;