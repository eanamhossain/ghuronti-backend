const { getAllUser } = require('../controllers/userController');
const { authMiddleWare } = require('../middlewares/auth');
const userRoute = require('express').Router();

userRoute.get('/', authMiddleWare,  getAllUser)

module.exports = userRoute;