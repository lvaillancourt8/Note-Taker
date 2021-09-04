const router = require('express').Router();

const noteData = require("../db/db.json");

module.exports = function(app) {

    app.get("api/notes", function (req, res) {
        res.json(noteData)
    });

}