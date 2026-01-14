const mongoose = require('mongoose');

const databseConnection = async () => {
 try {
    await mongoose.connect('mongodb://localhost:27017/book').then(()   => {
        console.log("Database connected successfully");
    });
 } catch (error) {
    console.log("Database connection failed", error);
 }      
}           
         
module.exports = databseConnection;