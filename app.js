var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var assert = require('assert');
var path = require('path');

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

console.log("Successfully connected to server");

app.get('/', function(req,res) {
	res.render('index');
});

app.get('/play', function(req,res) {
	res.render('play');
});

app.get('/suggest', function(req,res) {
	res.render('suggest');
});

app.get('/contact', function(req,res) {
	res.render('contact');
});

app.use(function(req,res) {
	res.sendStatus(404);
});

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Express server listening on port %s', port);
});

