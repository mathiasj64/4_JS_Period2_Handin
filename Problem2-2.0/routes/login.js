var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('login.hbs', {title: "Login Page"});
});

router.post('/', function(req, res, next){
  res.redirect("index");
});


module.exports = router;