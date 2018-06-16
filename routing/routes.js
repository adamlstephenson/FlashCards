//Dependencies
const path = require("path");

//Routing
module.exports = function (app) {

    //HTML GET Requests
    app.get("/", function (req, res) {
        res.send("<h1>Hello World</h1>")
    })

    app.get("/hello", function (req, res) {
        res.send("<h1>Hello JavaScript Developer</h1>")
    })
}