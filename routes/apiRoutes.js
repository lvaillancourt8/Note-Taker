const notesData = require('../db/db.json');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

module.exports = function (app) {
    app.get("/api/notes", (req, res) => {
        // Reads the stored notes to the notes page
        readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    });


    app.post("/api/notes", function (req, res) {

        console.log(req.body);

        // Destructuring assignment for the items in req.body
        const { title, text } = req.body;
        console.log(title);
        console.log(text);

        // Variable for the object we will save
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        
        res.json(true);
    });

//     // POST Route for submitting a note
//     app.post('/notes', (req, res) => {
    
//     // Log that a POST request was received
//     console.info(`${req.method} request received to submit feedback`);
  

  
//     // If all the required properties are present
//     if (noteTitle && noteText) {
      
//         // Variable for the object we will save
//       const newNote = {
//         noteTitle,
//         noteText,
//         note_id: uuid(),
//       };
  
//       readAndAppend(newNote, './db/db.json');
  
//       const response = {
//         status: 'success',
//         body: newNote,
//       };
  
//       res.json(response);
//     } else {
//       res.json('Error in posting feedback');
//     }
//   });

};