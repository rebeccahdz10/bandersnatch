var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index", {
            msg: "Welcome!",
        });
    });

    // Load home page
    app.get("/home", function (req, res) {
        res.render("home");
    });


    // Load contact page
    app.get("/contact", function (req, res) {
        res.render("contact");
    });
    // Load home page
    app.get("/profile", function (req, res) {
        res.render("profile");
    });
    app.get("/death", function (req, res) {
        res.render("death");
    });
    app.get("/prison", function (req, res) {
        res.render("prison");
    });
    app.get("/goodDay", function (req, res) {
        res.render("goodDay");
    });
    app.get("/blackout", function (req, res) {
        res.render("blackout");
    });

    // Load example page and pass in an example by id
    app.get("/questions/:id", function (req, res) {
        db.question.findOne({ where: { id: req.params.id } }).then(function (question_db) {
            res.render("question", {
                question: question_db
            });
            console.log(res.body)
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};