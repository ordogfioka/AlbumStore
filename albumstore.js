'use strict';

var BestSongFinder = require('./bestsongfinder');

class AlbumStore {
	constructor() {
		this.albums = [];
	}
	
	static create() {
		return new AlbumStore();
	}
	
	getAlbums() {
		return this.albums;
	}

	getAlbum(id) {
		return this.albums[id-1];
	}
	addAlbum(album) {
		this.albums.push({id: this.albums.length+1, songs: album});
		return {id : this.albums.length};
	}
	getBestSongs(albumNumber,numberOfSongs){
		var requestedAlbum = this.getAlbum(albumNumber);
		if(requestedAlbum == undefined) 
			return null;
		else{
			var bestsongfinder = new BestSongFinder(requestedAlbum.songs,numberOfSongs);
			return bestsongfinder.find();
		}
	}
	
	
}


module.exports = AlbumStore;