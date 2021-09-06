const notesData = require('../db/db.json');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        // Reads the stored notes to the notes page
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });


    app.post("/api/notes", function (req, res) {

        // Destructuring assignment for the items in req.body
        const { title, text } = req.body;

        // Variable for the object we will save adding in a unique id
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        //adding the new note to the database
        readAndAppend(newNote, './db/db.json');
        
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {

        const {id} = req.params;
        //search for the correct object to delete
        for (var i = 0; i < notesData.length; i++) {
            if (notesData[i].id == id) {
                
                //remove the note from the array
                notesData.splice(i,1);
                break;
            }
        }
        //write the new array to the database
        writeToFile('./db/db.json', notesData);
        res.json(true);
    });

};