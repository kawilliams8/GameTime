import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js';
import Game from '../src/Game.js';
import Turn from '../src/Turn.js';
import FullTurn from '../src/FullTurn.js';

// import spies from 'chai-spies';
// import DOMupdates from '../src/DOMupdates.js';
// chai.use(spies);

// chai.spy.on(DOMupdates, 'updateLater', () => true);

describe('FullTurn', () => {
	let game;
	beforeEach(() => {
     game = new Game(data);
     game.startGame();
     game.currentRound.beginRound();
    //  console.log(game.currentRound.currentTurn);
	});

	it('should be a function that instantiates a player', () => {
		expect(FullTurn).to.be.a('function');
		expect(game.currentRound.currentTurn).to.be.an.instanceof(FullTurn);
  });
  
  it('should receive information from Turn', () => {
    let answer1 = game.currentSurvey[1].answer;
    expect(game.currentRound.currentTurn.currentPlayer.name).to.equal('Djavan');
    expect(game.currentRound.currentTurn.currentSurvey[1].answer).to.equal(answer1);
  });

  it('should receive and check current player guess', () => {
    let answer1 = game.currentSurvey[1].answer;
    game.currentRound.currentTurn.checkGuess(answer1);
    console.log(game.playerOne);
    expect(game.currentRound.currentTurn.correctGuesses.length).to.equal(1);
    expect(game.currentRound.currentTurn.correctGuesses[0]).to.equal(answer1);
  });

})

// describe('FastTurn'), () => {
  // let player1, player2, turn, survey;
  // beforeEach(() => {
  //   player1 = new Player('Djavan');
  //   player2 = new Player('Katie');
  //   survey = [
  //     { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
  //     { answer: 'Beer', respondents: 67, surveyId: 1 },
  //     { answer: 'Donuts', respondents: 24, surveyId: 1 },
  //     { answer: 'Bowling Ball', respondents: 5, surveyId: 1 }
  //   ]
  //   turn = new Turn(player2, survey)
  // });
// }