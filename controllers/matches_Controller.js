var express = require('express')
var Match = require('../models/match_Model');

var router = express.Router()
var baseURL = "/matches";

// ALL
router.get(baseURL, function(req, res) {
	console.log('GET /matches')
	var matches = Match.getAllToday();
	res.send("matches");
});

module.exports = router;