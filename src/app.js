const express = require('../node_modules/express');

const app = express();

//this will only handle GET call 
app.get("/user",(req,res) => {
    res.send({fistname: "Chitranjan", lastname:"Gupta"});
})


// this will match all the HTTP Method API call 
app.use("/test",(req, res) => {
    res.send("Hello from the server")
});
app.listen(3000,() => {
    console.log("Server is successfully listing on port 3000.....");
    
});  