var mongoose = require('mongoose');

exports = module.exports = function(app) {

	// Connection to DB
	mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
	  if(err) throw err;
	  console.log('Connected to Database');
	});

	var tvshowSchema = new mongoose.Schema({
		title: 		{ type: String },
		year: 		{ type: Number },
		country: 	{ type: String },
		poster:  	{ type: String },
		seasons: 	{ type: Number },
		genre: 		{
			type: String,
			enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
		},
		summary: 	{ type: String }
	});

	mongoose.model('TVShow', tvshowSchema);

};
