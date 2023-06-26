const { signUp, login } = require("../../controllers/authControllers/authControllerSignup");
const authRouter = require("express").Router();

authRouter.post("/signup", signUp);
authRouter.post('/login', login);

module.exports = authRouter;