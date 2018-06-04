var express = require('express');
var router = express.Router();
var latest = require('../mocks/latest.json')
var relevant = require('../mocks/relevant.json')

router.get('/latest', function(req, res, next) {
  res.status(200).send(latest)
})

router.get('/relevant', function(req, res, next) {
  res.status(200).send(relevant)
})

module.exports = router;
