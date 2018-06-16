//Dependencies
const express = require("express");

//Express
const app = express();

//Port
const PORT = process.env.PORT || 3000;

//Listener
app.listen(PORT, function(){
    console.log("app listening on port " + PORT);
    
});