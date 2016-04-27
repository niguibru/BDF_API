// init libs
var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));  
// to can parse JSON
app.use(bodyParser.json());  
// to personalize HTTP methods
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

app.use(router);

app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
});