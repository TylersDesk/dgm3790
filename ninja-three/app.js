
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// ***********
// Route Stuff
// ***********

app.get('/', routes.index); 	// Default route for index <- Gets index.jade from routes/index.js. Remember this uses index.js because routes is defined with nothing after './routes'
//app.get('/portfolio', routes.portfolio);
app.get('/partials/:name', routes.partials);
app.get('*', routes.index);

// *****************
// Create the server
// *****************

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Thanks for trying the BEAN stack - tylermaynard');
});
