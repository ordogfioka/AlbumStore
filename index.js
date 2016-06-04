'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var albumstore = require('./albumstore').create();

app.use(bodyParser.json());

app.get('/albums', function(req, res) {
	var allAlbum = albumstore.getAlbums();
	res.status(200).send(allAlbum);
});

app.get('/albums/:id', function(req, res) {
	var album = albumstore.getAlbum(req.params.id);
	if(album) {
		res.status(200).send(album);  
	} else {
		res.status(400).sendFile(path.join(__dirname,'bad.jpg'));  
	}
});

app.get('/albums/:id/best', function(req, res) {
	var bestSongs = albumstore.getBestSongs(req.params.id,req.query.top);
	if(bestSongs && req.query.top) {
		res.status(200).send(bestSongs);  
	} else {
		res.status(400).sendFile(path.join(__dirname,'bad.jpg'));  
	}
});

app.post('/albums', function(req, res) {
    var id = albumstore.addAlbum(req.body);
    res.status(200).send(id);
});

app.listen(3000, function () {
  console.log('Album store service is listening on port ', this.address().port);
});

module.exports = app;
