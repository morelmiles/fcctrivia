var express = require('express');
var app = express();
var engines = require('consolidate');
var assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

console.log("Successfully connected to server");

app.get('/', function(req,res) {
	res.render('index');
});

app.use(function(req,res) {
	res.sendStatus(404);
});

var server = app.listen(5000, function() {
	var port = server.address().port;
	console.log('Express server listening on port %s', port);
});

