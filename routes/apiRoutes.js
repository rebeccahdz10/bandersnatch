var db = require("../models");

module.exports = function (app) {
    // Get all questions
    app.get("/api/mainDialogue", function (req, res) {
        db.mainDialogue.findAll().then(function (mainDialogue) {
            res.json(mainDialogue)
        });
    });
    app.get("/api/adventureOne", function (req, res) {
        db.adventureOne.findAll().then(function (adventureOne) {
            res.json(adventureOne)
        });
    });
    app.get("/api/adventureTwo", function (req, res) {
        db.adventureTwo.findAll().then(function (adventureTwo) {
            res.json(adventureTwo)
        });
    });
    app.get("/api/endings", function (req, res) {
        db.endings.findAll().then(function (endings) {
            res.json(endings)
        });
    });

    // Create a new example
    // app.post("/api/questions", function (req, res) {
    //     db.mainDialogue.create(req.body).then(function (dbExample) {
    //         res.json(dbExample);
    //     });
    // });

    // Delete an example by id
    // app.delete("/api/questions/:id", function (req, res) {
    //     db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
    //         res.json(dbExample);
    //     });
    // });
};