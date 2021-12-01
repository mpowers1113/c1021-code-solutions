const express = require('express');
const app = express();

let nextID = 1;

const grades = {};

app.use(express.json());

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.put('/api/grades/put', (req, res) => {
  nextID++;
  const incomingObject = req.body;
  incomingObject.id = nextID;
  grades[incomingObject.id] = incomingObject;
  res.json(grades[incomingObject.id]);
  res.status(201);
  res.end();
});
