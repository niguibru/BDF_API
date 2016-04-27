var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require('mongoose');

var app = express();

// Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Connection to DB
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Controllers
var tvshowsController = require('./controllers/tvshow_Controller');
app.use('/api', tvshowsController);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});


// // Routes demo
// var router = express.Router();
// router.get('/', function(req, res) {
//   res.send("Hello world!");
// });
// app.use(router);