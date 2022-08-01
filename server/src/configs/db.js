const mongoose = require("mongoose");
// require("dotenv").config();

module.exports = () => {
    const MONGODB_URL = "mongodb+srv://Hari:Hari123@cluster0.rrl89w5.mongodb.net/?retryWrites=true&w=majority"
    return mongoose.connect(MONGODB_URL);
}

