var express = require('express');
var router = express.Router();

var methods = require('../model/jokes');

router.get('/', function(req, res, next) {
  res.render('jokes.hbs', {jokes: methods.allJokes()});
})

module.exports = router;