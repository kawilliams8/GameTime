import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js';
import Game from '../src/Game.js';
import FullRound from '../src/FullRound.js';
import FullTurn from '../src/FullTurn.js';
// import spies from 'chai-spies';
// import DOMupdates from '../src/DOMupdates.js';
// chai.use(spies);

// chai.spy.on(DOMupdates, 'updateLater', () => true);

describe('Round', () => {
	let game;
	beforeEach(() => {
    game = new Game(data);
    game.startGame();
	});

	it('should be a function that instantiates a round', () => {
		expect(FullRound).to.be.a('function');
		expect(game.currentRound).to.be.an.instanceof(FullRound);
  });

  it('should instantiate a FullTurn', () => {
    game.currentRound.beginRound();
    expect(game.currentRound.currentTurn).to.be.an.instanceOf(FullTurn);
  });
  
})