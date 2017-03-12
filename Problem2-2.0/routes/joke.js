var express = require('express');
var router = express.Router();
var methods = require('../model/jokes');

router.get('/', function(req, res, next) {
  res.render('joke.hbs', {joke: methods.getRandomJoke()});
});

module.exports = router;