const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

//CONNECT TO THE DB
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  console.log('this is the post route', req.body);
  const feedback = req.body;
  const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;

  pool
    .query(query, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments,
    ])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Hmmm, that's not going to work. ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
