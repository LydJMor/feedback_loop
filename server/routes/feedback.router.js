const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get feedback
router.get('/', (req, res) => {
  let queryText = 'SELECT feeling, understanding, support, comments, flagged, date FROM "feedback" ORDER BY "id";';
  pool.query(queryText).then(result => {
    // Sending the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

// Adds new feedback to the database 
router.post('/',  (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding feedback`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
    VALUES ($1, $2, $3, $4, $5, $6);`;
  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding,newFeedback.support,newFeedback.comments,newFeedback.flagged,newFeedback.date])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;