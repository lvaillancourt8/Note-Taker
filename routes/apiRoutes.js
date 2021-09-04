const notesData = require('../db/db.json');

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(notesData)
    });

    // var newStore = {
    //     storeID: $("#storeID").val().trim(),
    //     storeName: $("#storeName").val().trim(),
    //     storeDescription: $("#storeDescription").val().trim(),
    //     status: $("#status").val().trim()
    // };

    app.post("/api/notes", function (req, res) {
        console.log(req);
        notesData.push(req.body);
        res.json(true);
    });

};