const express = require('express');
const router = express.Router();
const latest = require('../mocks/latest.json')
const relevant = require('../mocks/relevant.json')
const games = require('../mocks/games.json')

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

router.get('/game/:id', function(req, res, next) {
  const game = games.filter(elem => elem.id == req.params.id)
  res.status(200).send(game[0])
})

router.get('/related/:gameId', function(req, res, next) {
  const news = require('../mocks/news')
  const related = require('../mocks/related')
  const indexNews = news.findIndex(elem => elem.gameId == req.params.gameId)
  const indexRelated = related.findIndex(elem => elem.gameId == req.params.gameId)
  const arr = [news[indexNews], related[indexRelated]]
  res.status(200).send(arr)
})

module.exports = router;
