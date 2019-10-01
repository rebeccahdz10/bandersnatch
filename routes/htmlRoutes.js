var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    // Load home page
    app.get("/home", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("home", {
                examples: dbExamples
            });
        });
    });


    // Load contact page
    app.get("/contact", function (req, res) {
        res.render("contact");
    });
    // Load home page
    app.get("/profile", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("profile", {
                examples: dbExamples
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/questions/:id", function (req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
            res.render("question", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};