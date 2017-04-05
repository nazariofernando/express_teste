'use strict';

var express = require('express');
var router = express.Router();

//GET /questions
router.get('/', function(req, res){
	res.json({response : "blablablabla GET"});
})
//POST /questions
.post('/', function(req, res){
	res.json({
		response: "blablablabla POST",
		body: req.body
	});
})
//GET specific /questions
.get('/:id', function(req, res) {
	res.json({
		response: "blablablabla GET ID:" + req.params.id;
	});
})
;

module.exports = router;