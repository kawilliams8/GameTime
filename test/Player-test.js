import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';
// import spies from 'chai-spies';
// import DOMupdates from '../src/DOMupdates.js';
// chai.use(spies);
// import data from '../src/Data.js';

// chai.spy.on(DOMupdates, 'updateLater', () => true);

describe('Player', () => {
	let player;
	beforeEach(() => {
		player = new Player('Djavan');
	});

	it('should be a function that instantiates a player', () => {
		expect(Player).to.be.a('function');
		expect(player).to.be.an.instanceof(Player)
	});

	// //This came from the game test originally, okay to delete later
	// it('should instantiate players', () => {
	// 	// game.createPlayers('Djavan', 'Katie');
	// 	expect(player1).to.be.an.instanceOf(Player);
	// 	expect(player1.name).to.equal('Djavan');
	// });
})