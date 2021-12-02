
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const data = require('./data.json');
const notes = data.notes;

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get('/application/json', (req, res) => {
  const notesArray = [];
  for (const key in notes) {
    notesArray.push(notes[key]);
  }
  res.json(notesArray);
});

app.put('/application/json/:id', (req, res) => {
  const incomingID = req.params.id;
  if (!parseInt(incomingID) || incomingID < 0) {
    res.status(400).json({ Error: 'ID cannot be a negative or non-integer' });
  } else if (incomingID in notes) {
    res.json(notes[incomingID]);
  } else {
    res.status(404).json({ Error: `No match for ${incomingID}` });
  }
});

app.post('/api/notes', (req, res) => {
  const content = 'content';
  if (content in req.body === false) {
    res.status(400).json({ Error: 'Empty response body' });
  } else {
    data.nextId = Number(data.nextId) + 1;
    const incomingObject = req.body;
    incomingObject.id = data.nextId;
    notes[incomingObject.id] = incomingObject;
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newJSON, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred.' });
      } else {
        res.status(201);
        res.json(notes[incomingObject.id]).status(201);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteID = req.params.id;
  if (!parseInt(deleteID) || deleteID < 0) {
    res.status(400).json({ Error: 'ID cannot be a negative or non-integer' });
  } else if (deleteID in notes === false) {
    res.status(404).json({ Error: `No match for ${deleteID}` });
  } else {
    delete notes[deleteID];
    const newJSON = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', newJSON, err => {
      if (err) {
        console.error(err);
        res.status(500);
      } else {
        res.status(204).json({});
      }
    });
  }
});
