const mongoose = require("mongoose");

const connectDB = async() => {
   await mongoose.connect("mongodb+srv://chitranjangupta51:3ByeItv9gPCKhKVL@namastenode.yh5yg.mongodb.net/devTinder?retryWrites=true&w=majority&appName=NamasteNode"); 
}; 

module.exports = connectDB;


