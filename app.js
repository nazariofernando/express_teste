'use strict';

var express = require('express');
var app = express();
var routes = require('./routes');
var parser = require('body-parser').json;
var logger = require('morgan');

// create /questions
app.use(logger('dev'));
app.use('/questions', routes);

var port = process.env.PORT || 3000;

app.listen(port, function() {

	console.log('O app está funfando');

});