var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs')
var session = require('express-session');

var login = require('./routes/login');
var index = require('./routes/index');
var joke = require('./routes/joke');
var jokes = require('./routes/jokes');
var addJoke = require('./routes/addJoke');
var api = require('./routes/api');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret_3162735', saveUninitialized: true, resave: true }));

/*app.use(function(req, res, next){
  if(req.url.startsWith("/api/"))
  {
    
  }
})
*/

/*
app.use(function (req, res, next) {
  if(session.userName != null)
  {
    console.log("username found in session");
    return next();
  }
  else if(req.userName != null)
  {
    console.log("Username found in request");
    sessions.userName = req.body.userName;
    return res.redirect("/index");
  }
  else
  {
    console.log("Username not found");
    req.url = "/login"; //We will create this page in the next step
    return next();
  }
});*/

app.use('/login', login);
app.use('/index', index);
app.use('/joke', joke);
app.use('/jokes', jokes);
app.use('/addJoke', addJoke);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
