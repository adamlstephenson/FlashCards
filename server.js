//Dependencies
const express = require("express");
const path = require("path");

//Express
const app = express();

//Port
const PORT = process.env.PORT || 3000;

//Listener
app.listen(PORT, function () {
    console.log("app listening on port " + PORT);

});

//Router
require("./routing/routes.js")(app);