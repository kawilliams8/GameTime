import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js'
import Game from '../src/Game.js';
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

chai.spy.on(DOMupdates, ['displayCurrentTurn', 'clearBoard'], () => true);

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game(data);
  });

  it('should be a function that instantiates a game', () => {
    expect(Game).to.be.a('function');
    expect(game).to.be.an.instanceof(Game);
  });

  it('should pass survey data', () => {
    expect(game.data).to.deep.equal(data);
  });

  it('should select a survey', () => {
    game.selectSurvey()
    expect(game.currentSurvey.length).to.equal(4);
  });

  it('should store the used survey ids', () => {
    game.selectSurvey();
    expect(game.usedSurveys.length).to.equal(1);
  });

  it('should only select unused surveys', () => {
    game.usedSurveys = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    game.selectSurvey();
    expect(game.currentSurvey[0].id).to.equal(2);
  });

  it('should determine if a Full or Fast Round is needed', () => {
    game.selectSurvey();
    game.chooseFullorFast();
    expect(game.currentRound.roundType).to.equal('Full')

  });

  it('should create the first FullRound', () => {
    game.startGame();
    chai.spy.on(game.currentRound, 'beginRound', () => true)
    expect(game.currentRound.roundType).to.equal('Full');
  });

  it('should start a round of the correct type', () => {
    game.startGame();
    game.startNextRound();
    expect(game.usedSurveys.length).to.equal(2);
    expect(game.currentRound.roundType).to.equal('Full');
  });

})