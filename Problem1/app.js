var express = require("express");
var app = express();

//add your content here

app.listen(3000, function () {
  console.log("Server started, listening on: " + 3000);
})

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {

  var calculatorRequest = {
    operation: req.params.operation,
    n1: Number(req.params.n1),
    n2: Number(req.params.n2)
  }

  req.calc = calculatorRequest;
  next();

});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/calculator/*", function (req, res) {
  var object = req.calc;

  switch (object.operation) {
    case "add":
    res.send((object.n1 + object.n2).toString());
      break;
    case "subtract":
    res.send((object.n1 - object.n2).toString());
      break;
    case "multiply":
    res.send((object.n1 * object.n2).toString());
      break;
    case "divide":
    res.send((object.n1 / object.n2).toString());
      break;
    default:
      "Error"
  }
})
