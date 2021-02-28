const express = require('express');
const { rawListeners } = require('../modules/pool');
const router = express.Router();
const pool = require('../modules/pool');
const moment = require('moment');


// POST to send submissions to DB
router.post('/', (req,res) => {
  const newFeedback = req.body;
  console.log('req.body', newFeedback);
  const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4)`;
  pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('Error in POST', err);
      res.sendStatus(500);
    })
}) // end POST

// GET - Don't need for base mode
router.get('/', (req,res) => {
  pool.query('SELECT * FROM "feedback" ORDER BY id;')
    .then((results) => {
    for (item of results.rows) {
      item.date = moment(item.date).format('MM-DD-YYYY');
    }
    console.log('Successful GET');
    res.send(results.rows)
    })
    .catch((err) => {
      console.log('Error in GET', err);
      res.status(500);
    })
}); // end GET

module.exports = router;