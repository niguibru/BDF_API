var resultadosFutbol_urlBase = "http://www.resultados-futbol.com/scripts/api/api.php?";
var resultadosFutbol_format = "format=json";
var resultadosFutbol_key = "key=316c3695459c00f218b7a8d39382e5cf";
var resultadosFutbol_timezone = "tz=America/Buenos_Aires";
var resultadosFutbol_Url = resultadosFutbol_urlBase 
	+ "&" + resultadosFutbol_format 
	+ "&" + resultadosFutbol_key 
	+ "&" + resultadosFutbol_timezone;

// Ex 
// "http://www.resultados-futbol.com/scripts/api/api.php?&format=json&key=316c3695459c00f218b7a8d39382e5cf&tz=America/Buenos_Aires&req=matchsday&country=AR&date=2016-5-2"
module.exports.getAllToday = function(callback) {
	matchesToday(function(matchesToday){
		callback(matchesToday);
	});
}

function matchesToday(callback) {
	var date_utils = require('../utils/date_utils');
	matchesByDate(date_utils.getTodaysDate(), function(matchesToday){
		matchesByDate(date_utils.getTomorrowDate(), function(matchesTomorrow){
			var matchesReallyToday = [];
			var matchesTodayAndTomorrow = matchesToday.concat(matchesTomorrow);
			matchesTodayAndTomorrow.forEach(function(match) {
				console.log(match.date + "--" + date_utils.getTodaysDate("/"));
			    if (match.date == date_utils.getTodaysDate("/")) {
			  		matchesReallyToday.push(match);
				};
			})
			callback(matchesReallyToday);
		});
	});
}

function matchesByDate(date, callback) {
	var url = resultadosFutbol_Url + "&" + "req=matchsday&country=AR&date=" + date;
	var request = require('request');
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	var matches = JSON.parse(body);
	        callback(matches.matches);
	    }
	})
}
