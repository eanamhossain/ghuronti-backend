const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('Database connection established')
    }catch (error){
        console.log('database connection failed');
    }
}

module.exports = connectDB;