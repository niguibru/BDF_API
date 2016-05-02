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
	matchesByDate("2016-5-2", function(matchesToday){
		matchesByDate("2016-5-3", function(matchesTomorrow){
			callback(matchesToday.concat(matchesTomorrow));
		});
	});
}

function matchesByDate(date, callback) {
	var url = resultadosFutbol_Url + "&" + "req=matchsday&country=AR&date=" + date;
	console.log(url);
	var request = require('request');
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	var matches = JSON.parse(body);
	        callback(matches.matches);
	    }
	})
}

function getTodaysDate() {
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    return yyyy + '-' + mm + '-' + dd;
}