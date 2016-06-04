'use strict';

var request = require('supertest');
var app = require('./index');
var path = require('path');
describe('Album store', function() {
	var album = [{ "frequency": 197812, "title": "re_hash" },
				{ "frequency": 78906, "title": "5_4" },
				{ "frequency": 189518, "title": "tomorrow_comes_today" },
				{ "frequency": 39453, "title": "new_genious" },
				{ "frequency": 210492, "title": "clint_eastwood" },
				{ "frequency": 26302, "title": "man_research" },
				{ "frequency": 22544, "title": "punk" },
				{ "frequency": 19727, "title": "sound_check" },
				{ "frequency": 17535, "title": "double_bass" },
				{ "frequency": 18782, "title": "rock_the_house" },
				{ "frequency": 198189, "title": "19_2000" },
				{ "frequency": 13151, "title": "latin_simone" },
				{ "frequency": 12139, "title": "starshine" },
				{ "frequency": 11272, "title": "slow_country" },
				{ "frequency": 10521, "title": "m1_a1" }];
				
				
	var checkAlbums = function(expectedAlbums, done) {
		request(app)
			.get('/albums')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200,  expectedAlbums
			, done);
	};
	var checkNotFound = function(expectedAlbums, done) {
		request(app)
			.get('/albums/2')
			.set('Accept', "image/jpeg")
			.expect('Content-Type', "image/jpeg")
			.expect(400,  expectedAlbums
			, done);
	};

	var checkForbest = function(expectedSongs, done) {
		request(app)
			.get('/albums/1/best?top=3')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200,  expectedSongs
			, done);
	};
	describe('GET /albums', function() {
		it('should get an empty array if there is no album saved in the service', function(done) {
			checkAlbums([], done);
		});
	});	
	
	describe('GET /albums/id', function() {
		it('should get error 400', function(done) {
			checkNotFound(undefined,done);
		});
	});
	
	describe('POST /albums', function() {

		it('should accept a new album save request and return new id', function(done) {
			request(app)
			.post('/albums')
			.send(album)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, { id: 1 }, done);
		});
	});
	
	
	describe('GET /albums/id/best?top=3', function() {
		it('Should get the top 3', function(done) {
			checkForbest([{"title":"19_2000"},{"title":"clint_eastwood"},{"title":"tomorrow_comes_today"}],done);
		});
	});

});