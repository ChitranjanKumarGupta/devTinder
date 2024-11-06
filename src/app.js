const express = require('../node_modules/express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// middleware to handle JSON object from Postman to UI
app.use(express.json());
app.post("/signup", async (req,res) => {

    
// creating a new instance of the user model
const user = new User(req.body);

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
 