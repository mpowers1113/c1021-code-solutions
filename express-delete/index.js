const express = require('express');
const app = express();

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

app.delete('/api/grades/:id', (req, res) => {
  const deleteId = req.params;
  const id = Object.values(deleteId);
  const numberID = Number(id[0]);
  delete grades[numberID];
  console.log(`Deleted id ${numberID}!`);
  res.json(grades);
});

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
