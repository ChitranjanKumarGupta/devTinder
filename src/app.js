const express = require('../node_modules/express');

const app = express();

app.use((req, res) => {
    res.send("Hello from the server")
});
app.listen(3000,() => {
    console.log("Server is successfully listing on port 3000.....");
    
});