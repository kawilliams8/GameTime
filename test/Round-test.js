import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js';
import Game from '../src/Game.js';
import FullRound from '../src/FullRound.js';
import FullTurn from '../src/FullTurn.js';
import FastRound from '../src/FastRound.js';
import FastTurn from '../src/FastTurn.js';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

chai.spy.on(DOMupdates, ['turnHeadsForPlayers', 'displayCurrentTurn'], () => true);

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
    expect(DOMupdates.displayCurrentTurn()).to.equal(true);
    expect(DOMupdates.turnHeadsForPlayers()).to.equal(true);
  });

  it('should end the FullRound', () => {
    game.currentRound.endRound();
    expect(game.roundCounter).to.equal(2);
    expect(DOMupdates.displayCurrentTurn()).to.equal(true);
    expect(DOMupdates.turnHeadsForPlayers()).to.equal(true);
  }); 
});

describe('FastRound', () => {
  let game;
  beforeEach(() => {
    game = new Game(data);
    game.startGame();
    game.roundCounter = 3;
    game.startNextRound();
  });
  
  it('should continue to a fast round', () => {
    expect(game.currentRound).to.be.an.instanceof(FastRound);
    expect(game.currentRound.roundType).to.equal('Fast');
  })

  it('should start a fast turn', () => {
    expect(game.currentRound.currentTurn).to.be.an.instanceOf(FastTurn);
  });

  it('should start with player one as the starting player', () => {
    expect(game.currentRound.currentPlayer).to.deep.equal(game.playerOne);
  });

  it('should continue round with player two as the current player', () => {
    game.currentRound.continueRound();
    expect(game.currentRound.currentPlayer).to.deep.equal(game.playerTwo);
  });

});