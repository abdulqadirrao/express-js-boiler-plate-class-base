var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('./src/app/helpers');

var indexRouter = require('./src/routes/index');
require('dotenv').config();
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter);
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  err.code = err.statusCode;
  return response(res).error(err);
});

module.exports = app;
