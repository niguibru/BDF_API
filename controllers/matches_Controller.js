var express = require('express')
var Match = require('../models/match_Model');

var router = express.Router()
var baseURL = "/matches";

// ALL
router.get(baseURL, function(req, res) {
	console.log('GET /matches')
	var matches = Match.getAllToday(function(matches){
	    var html = "<ul>";
		matches.forEach(function(match) {
	        if (match.league_id == "20176") {
	            var item = match.local + " vs " + match.visitor + " : " + match.result;
		       	html = html + "<li>" + item + "</li>";
	        }
		});
	    html = html + "</ul>";
		// res.send(JSON.stringify(matches));
		res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write("<!doctype html><html><meta charset='utf-8'>" + html + "</html>");  
        res.end();
	});
});

module.exports = router;