'use strict';

var expect = require('chai').expect;
var BestSongFinder = require('./bestsongfinder');

describe('BestSongFinder', function() {

	describe('#quality index calculation', function() {

		it(`should return the quqlity index`, function() {
			var bestSongFinder = new BestSongFinder([	
												{ "frequency": 197812, "title": "re_hash" },
												{ "frequency": 78906, "title": "5_4" },
												{ "frequency": 189518, "title": "tomorrow_comes_today" },
												{ "frequency": 39453, "title": "new_genious" },
												{ "frequency": 210492, "title": "clint_eastwood" },
												{ "frequency": 26302, "title": "man_research" },
												{ "frequency": 22544, "title": "punk" },
												{ "frequency": 19727, "title": "sound_check" },
												{ "frequency": 17535, "title": "double_bass" },
												{ "frequency": 18782, "title": "rock_the_house" },
												{ "frequency": 198189,"title": "19_2000" },
												{ "frequency": 13151, "title": "latin_simone" },
												{ "frequency": 12139, "title": "starshine" },
												{ "frequency": 11272, "title": "slow_country" },
												{ "frequency": 10521, "title": "m1_a1" }
											],5);
											
			var k = bestSongFinder.getQualityIndex(14,10521);
			expect(k).to.eql(10521);
			k = bestSongFinder.getQualityIndex(0,197812);
			expect(k).to.eql(13187.47);
			k = bestSongFinder.getQualityIndex(1,78906);
			expect(k).to.eql(5636.14);
			k = bestSongFinder.getQualityIndex(2,78906);
			expect(k).to.eql(6069.69);
    });

	});
	describe('#sorted array', function() {

		it(`should sort the songs array by the quality index`, function() {
			var bestSongFinder = new BestSongFinder([	{ "frequency": 30, "title": "one" },
														{ "frequency": 30, "title": "two" },
														{ "frequency": 15, "title": "three" },
														{ "frequency": 25, "title": "four" }
														], 1);
			var k = bestSongFinder.sortSongs();
			expect(k).to.eql( [{ "frequency": 25, "title": "four" },{ "frequency": 30, "title": "two" },{ "frequency": 30, "title": "one" },{ "frequency": 15, "title": "three" }]);
		});
	});
  
	describe('#find function', function() {

		it(`should return the first best n songs`, function() {
			var bestSongFinder = new BestSongFinder([	{ "frequency": 30, "title": "one" },
														{ "frequency": 30, "title": "two" },
														{ "frequency": 15, "title": "three" },
														{ "frequency": 25, "title": "four" }
														], 2);
			var k = bestSongFinder.find();
			expect(k).to.eql( [{ "title": "four" },{ "title": "two" }]);
    });
  });


});
