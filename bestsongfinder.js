'use strict';

class BestSongFinder {

	constructor(_songs, _n) {
		this.songs = [];
		_songs.forEach(song => this.songs.push(song));
		this.n = _n;
	}

	find() {
		var result = [];
		this.sortSongs().slice(0,this.n).forEach(x => result.push({title : x.title}));
		return result;
	}

	getQualityIndex(order,listened) {
		var toBeRounded = listened/(this.songs.length-order);
		return Math.round(toBeRounded* 100) / 100
	}
	
	sortSongs(){
		for(var i=0;i<this.songs.length;i++)
			for(var j=i+1;j<this.songs.length;j++){
				if(this.getQualityIndex(i,this.songs[i].frequency)<this.getQualityIndex(j,this.songs[j].frequency))
				{
					var temporary = this.songs[i];
					this.songs[i] = this.songs[j];
					this.songs[j] = temporary;
				}
			}
		return this.songs;
	}


}

module.exports = BestSongFinder;
