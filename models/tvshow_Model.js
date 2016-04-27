var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tvShowSchema = new Schema( {
    title: { type: String },
	year: { type: Number },
	country: { type: String },
	poster: { type: String },
	seasons: { type: Number },
	genre: {
		type: String,
		enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
	},
	summary: { type: String }
}),
TVShow = mongoose.model('TVShow', tvShowSchema);

module.exports = TVShow;
