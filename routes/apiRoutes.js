var db = require("../models");

module.exports = function (app) {
    // Get all questions
    app.get("/api/questions", function (req, res) {
        db.adventureOne.findAll({}).then(function (adventureOne) {
            res.json(adventureOne);
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