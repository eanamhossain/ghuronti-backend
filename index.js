const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth/authRouter');
const userRoute = require('./routes/userRoute');
const addProductRoute = require('./routes/productListRoute');
dotenv.config();


app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRoute);
app.use('/api/product', addProductRoute)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
    connectDB();
})