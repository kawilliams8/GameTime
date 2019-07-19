import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js';
import Game from '../src/Game.js';
import FullRound from '../src/FullRound.js';
import FullTurn from '../src/FullTurn.js';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

chai.spy.on(DOMupdates, ['turnHeadsForPlayers'], () => true);

describe('FullRound', () => {
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

  it('should continue an ongoing FullRound', () => {
    game.currentRound.continueRound();
    expect(game.currentRound.currentTurn).to.be.an.instanceOf(FullTurn);
    expect(DOMupdates.displayCurrentTurn).to.be.called(1);
    expect(DOMupdates.displayCurrentTurn).to.equal(true);
    expect(DOMupdates.turnHeadsForPlayers).to.be.called(1);
    expect(DOMupdates.turnHeadsForPlayers).to.equal(true);
  });

  it('should end the FullRound', () => {
    game.currentRound.endRound();
    expect(game.roundCounter).to.equal(2);
    expect(DOMupdates.displayCurrentTurn).to.be.called(1);
    expect(DOMupdates.displayCurrentTurn).to.equal(true);
    expect(DOMupdates.turnHeadsForPlayers).to.be.called(1);
    expect(DOMupdates.turnHeadsForPlayers).to.equal(true);
  });
  
})