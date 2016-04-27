var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	  if(err) throw err;
	  console.log('Connected to Database');
	});
}

