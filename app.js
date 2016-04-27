var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// app init
var app = express();

// app Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// DB Connection
require("./db").connect();

// Controllers
app.use('/', express.Router().get('/', function(req, res) { res.send("Hello world!"); }));
app.use('/api', require('./controllers/tvshow_Controller'));

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
