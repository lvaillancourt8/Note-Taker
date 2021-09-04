const notesData = require('../db/db.json');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        // Reads the stored notes to the notes page
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });


    app.post("/api/notes", function (req, res) {

        // Destructuring assignment for the items in req.body
        const { title, text } = req.body;
        console.log(title);
        console.log(text);

        // Variable for the object we will save
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.body);

        const noteId = id;
        //we need to get the correct object
        for (var i = 0; i < notesData.length; i++) {
            if (notesData[i].id == noteId) {

                notesData.splice(i,1);

                break; //Stop this loop, we found it!
            }

        }
        res.json(true);
    });

};