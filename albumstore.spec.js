'use strict';

var expect = require('chai').expect;
var albumStore = require('./albumstore').create();


describe('Album Store', function() {
	
	describe('#empty albumStore', function() {

		it(`should create the store`, function() {
		});
	});
  
	describe('#add new album', function() {

		it(`should add new album to the store and return with the new id`, function() {
			var k = albumStore.addAlbum([{ frequency: 1, title: 'title1' }]);
			expect(k).to.eql({ id: 1 });
		});
		
		it(`add another album`, function() {
			var k = albumStore.addAlbum([{ frequency: 1, title: 'title2' }]);
			expect(k).to.eql({ id: 2 });
		});
		
	});
	describe('#get albums', function() {

		it(`should return two albums`, function() {
			var k = albumStore.getAlbums();
			expect(k).to.eql([ 	{ id: 1, songs: [ { frequency: 1, title: 'title1' } ] },
								{ id: 2, songs: [ { frequency: 1, title: 'title2' } ] } ]);
		});
		it(`should return one album`, function() {
			var k = albumStore.getAlbum(1);
			expect(k).to.eql( 	{ id: 1, songs: [ { frequency: 1, title: 'title1' } ] });
		});
		it(`should return undefined`, function() {
			var k = albumStore.getAlbum(0);
			expect(k).to.undefined;
		});		
		it(`should return undefined`, function() {
			var k = albumStore.getAlbum(3);
			expect(k).to.undefined;
		});
	});
	describe('#best song finder', function() {

		it(`should return the best song`, function() {
			var k = albumStore.getBestSongs(1,1);
			expect(k).to.eql([ 	{ title: 'title1' } ]);
		});
	});
});
