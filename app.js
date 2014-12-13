// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var tokenController = require('./controller/TokenController');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// more routes for our API will happen here

// on routes that end in /tokens
// ----------------------------------------------------
router.route('/tokens')

	// create a token (accessed at POST http://localhost:8080/api/tokens)
	.post(function(req, res) {
		tokenController.autenticar(req, res);
	});

router.route('/tokens/:id')
	.get(function(req, res) {
		tokenController.validar(req, res);
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Hola Jorgito ' + port);


