var express = require('express');
var router = express.Router();
var methods = require('../model/jokes');

router.get('/joke', function (req, res, next) {
    //Hvordan får man en string fra en funktion ind i et JSON objekt?
    var json = {joke: methods.getRandomJoke};
    var json2 = {joke: "haha"};
    console.log(methods.getRandomJoke);
    res.send(json2);
});

router.get('/jokes', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send("methods.allJokes");
});

router.get('/joke', function (req, res, next) {
    res.send(methods.getRandomJoke);
});

module.exports = router; 