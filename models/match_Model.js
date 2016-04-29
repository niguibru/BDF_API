var resultadosFutbol_urlBase = "http://www.resultados-futbol.com/scripts/api/api.php?";
var resultadosFutbol_format = "format=json";
var resultadosFutbol_key = "key=316c3695459c00f218b7a8d39382e5cf";
var resultadosFutbol_timezone = "tz=America/Argentina/Buenos_Aires";
var resultadosFutbol_Url = resultadosFutbol_urlBase 
	+ "&" + resultadosFutbol_format 
	+ "&" + resultadosFutbol_key 
	+ "&" + resultadosFutbol_timezone;

// Ex 
// "http://www.resultados-futbol.com/scripts/api/api.php?tz=America/Argentina/Buenos_Aires&format=json&req=matchsday&key=316c3695459c00f218b7a8d39382e5cf"
module.exports.getAllToday = function() {
	var url = resultadosFutbol_Url + "&" + "req=matchsday";
	var request = require('request');
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var matches = JSON.parse(body);
	        console.log(matches.matches[0]);
	        return body;
	     }
	})
}
