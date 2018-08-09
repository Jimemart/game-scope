const express = require('express');
const router = express.Router();
const latest = require('../mocks/latest.json')
const relevant = require('../mocks/relevant.json')
const users = require('../mocks/user.json')
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

router.get('/related/:gameId', async function(req, res, next) {
  const news = await require('../mocks/news')
  const related = await require('../mocks/related')
  const indexNews = await news.findIndex(elem => elem.gameId == req.params.gameId)
  const indexRelated = await related.findIndex(elem => elem.gameId == req.params.gameId)
  const arr = await [news[indexNews], related[indexRelated]]
  const finalArr = await arr.filter(elem => !!elem )
  console.log(finalArr)
  await res.status(200).send(finalArr)
})

router.get('/user/:id', function(req, res, nest) {
  const user = users.filter(elem => elem.id == req.params.id)
  res.status(200).send(user[0])
})

module.exports = router;
