var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Models and Controllers
var tvshowsModel = require('./models/tvshow_Model')(app);
var tvshowsController = require('./controllers/tvshow_Controller');

// Routes
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var tvshowsRoutes = express.Router();

tvshowsRoutes.route('/tvshows')
  .get(tvshowsController.findAllTVShows)
  .post(tvshowsController.addTVShow);

tvshowsRoutes.route('/tvshows/:id')
  .get(tvshowsController.findById)
  .put(tvshowsController.updateTVShow)
  .delete(tvshowsController.deleteTVShow);

app.use('/api', tvshowsRoutes);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});


