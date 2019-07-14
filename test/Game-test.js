import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js'
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
import FullTurn from '../src/FullTurn.js';
import Round from '../src/Round.js';
import FullRound from '../src/FullRound.js'
import Game from '../src/Game.js';
// import spies from 'chai-spies';
// import DOMupdates from '../src/DOMupdates.js';
// chai.use(spies);
// import data from '../src/Data.js';

// chai.spy.on(DOMupdates, 'updateLater', () => true);

describe('Game', () => {
	let player1, player2, turn, survey, round, game, fullTurn, fullRound;
	beforeEach(() => {
      survey = [
      { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' }, 
      { answer: 'Beer', respondents: 67, surveyId: 1 }, 
      { answer: 'Donuts', respondents: 24, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 }
    ];
    game = new Game(data);
    round = new Round(player1, player2, survey, player1);
    fullRound = new FullRound();
    turn = new Turn(player2, survey);
    fullTurn = new FullTurn();
	});

	it('should be a function that instantiates a game', () => {
		expect(Game).to.be.a('function');
		expect(game).to.be.an.instanceof(Game);
  });

  it('should pass survey data', () => {
    expect(game.data).to.deep.equal(data);
  });

  it('should select a survey', () => {
    expect(game.currentSurvey).to.deep.equal(survey);
  });

  it('should only select unused surveys', () => {
    let surveyCheck = !game.usedSurveys.includes(currentSurvey.id);
    expect(surveyCheck).to.equal(true);
  });

  it('should instantiate players', () => {
    let player1 = game.startGame('Djavan', 'Katie');
    expect(player1).to.be.an.instanceOf(Player);
    expect(player1.name).to.equal('Djavan');
  });

  it('should instantiate a FullRound', () => {
    let player1 = game.startGame('Djavan', 'Katie');
    exp
    ect(player1).to.be.an.instanceOf(Player);
    expect(player2.name).to.equal('Katie');
  });

})