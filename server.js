//Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Express
const app = express();

//Express Data Parsing
app.use(bodyParser.urlencoded({ extended: false }));

//Port
const PORT = process.env.PORT || 3000;

//Listener
app.listen(PORT, function () {
    console.log("app listening on port " + PORT);

});

//Router
require("./routing/routes.js")(app);

//Set PUG
app.set("view engine", "pug");