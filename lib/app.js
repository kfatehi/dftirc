var express = require("express");
var app = express();

app.get("/", function(req, res, next) {
  res.end('hi');
});

module.exports = app;
