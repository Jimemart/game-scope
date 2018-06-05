const express = require('express');
const router = express.Router();
const latest = require('../mocks/latest.json')
const relevant = require('../mocks/relevant.json')

router.get('/latest', function(req, res, next) {
  res.status(200).send(latest)
})

router.get('/relevant', function(req, res, next) {
  res.status(200).send(relevant)
})

router.get('/news/:id', function(req, res, next) {
  const json = require(`../mocks/${req.params.id}`)
  res.status(200).send(json)
})

module.exports = router;
