const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST to send submissions to DB
router.post('/', (req,res) => {
  
})

// GET - Might not need

/*
router.get('/', (req,res) => {
  pool.query('SELECT * FROM "feedback";')
    .then((results) => {
    console.log('Successful GET');
    res.send(results.rows)
    })
    .catch((err) => {
      console.log('Error in GET', error);
      res.status(500);
    })
});
*/




module.exports = router;