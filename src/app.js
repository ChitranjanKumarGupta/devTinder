const express = require('../node_modules/express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req,res) => {
    const userObj = {
        firstName : "Virat",
        lastName : "Koh22li",
        emailId : "akshay@gmail.com",
        password : "akshay@123"
    }

    
// creating a new instance of the user model
const user = new User(userObj);

try{
    await user.save();
    res.send("User Added successfully");
}catch(err){
    res.status(400).send("Error Saving the user:" + err.message);
}
});




// Database connection

connectDB().then(() =>{
    console.log("Database connection established.....");
    app.listen(3000,() => {
        console.log("Server is successfully listing on port 3000.....");
        
    }); 
}).catch(err=>{
    console.log("Database cannot be connected");
    
}); 
 