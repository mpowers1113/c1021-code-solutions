const express = require('express');
const pg = require('pg');
const app = express();
app.use(express.json());
const score = 'score';
const name = 'name';
const course = 'course';
const requiredParams = ['name', 'course', 'score'];

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get('/api/grades', (req, res, next) => {
  const sql = `select * 
               from "grades"`;
  db.query(sql).then(dbres => {
    const grades = dbres.rows;
    if (!grades) {
      res.status(404).json({
        error: 'Cannot find grades in database.'
      });
    } else {
      res.status(200).json(grades);
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({
      Error: 'An unexpected error occurred.'
    });
  });
});

app.post('/api/grades', (req, res, next) => {
  const gradeToInsert = req.body;
  let submittedScore = Number(gradeToInsert[score]);
  if (submittedScore < 0 || submittedScore > 100) submittedScore = false;
  for (const key in gradeToInsert) {
    if (requiredParams.includes(key) === false || submittedScore === false) {
      res.status(400).json({
        error: 'Request must include name, course, and score.'
      });
      return;
    }
  }
  const sql = `insert into "grades" ("name", "course","score") 
                    values ($1, $2, $3) 
                    returning *`;
  db
    .query(sql, [gradeToInsert[name], gradeToInsert[course], gradeToInsert[score]])
    .then(dbres => {
      const dbReturning = dbres.rows[0];
      res.status(201).json(dbReturning);
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error ocurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const reqBody = req.body;
  const gradeId = req.params.gradeId;
  let submittedScore = Number(reqBody[score]);
  if (submittedScore < 0 || submittedScore > 100) submittedScore = false;
  if (!Number(gradeId)) {
    res.status(400).json({ error: 'invalid grade id' });
    return;
  }
  for (const key in reqBody) {
    if (requiredParams.includes(key) === false || submittedScore === false) {
      res.status(400).json({
        error: 'Request must include name, course, and score.'
      });
      return;
    }
  }
  const sql = `update "grades" 
                set "name" = $1, "course" = $2,"score" = $3 
                where "gradeId" = $4
                returning *`;
  db
    .query(sql, [reqBody[name], reqBody[course], reqBody[score], Number(gradeId)])
    .then(dbres => {
      const dbReturning = dbres.rows[0];
      if (!dbReturning) {
        res.status(404).json({
          error: 'Grade does not exist in the database'
        });
      } else {
        res.status(200).json(dbReturning);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error ocurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const deleteIdParam = req.params.gradeId;
  if (!Number(deleteIdParam)) {
    res.status(400).json({ error: 'id must be an integer' });
    return;
  }
  const sql = `delete from "grades"
                 where "gradeId" = $1
                 returning *`;
  db
    .query(sql, [Number(deleteIdParam)])
    .then(dbres => {
      const dbReturning = dbres.rows[0];
      if (!dbReturning) {
        res.status(404).json({ error: 'grade id does not exist in the database' });
      } else {
        res.status(204).json({});
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occurred.' });
    });
});
