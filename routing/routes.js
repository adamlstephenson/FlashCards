//Dependencies
const path = require("path");

//Routing
module.exports = function (app) {

    //HTML GET Requests
    app.get("/", function (req, res) {
        res.render("index")
    })

    app.get("/cards", function (req, res) {
        res.render("card", { prompt: "What is the only species of trout native to Minnesota?"})
    })

    app.get("/hello", function (req, res) {
        res.render("hello")
    })

    //POST Requests
    app.post("/hello", function (req, res) {
        console.log(req.body)
        res.render("hello")
    })
}