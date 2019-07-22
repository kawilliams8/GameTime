import chai from 'chai';
const expect = chai.expect;

import data from '../src/Data.js';
import Game from '../src/Game.js';
import Turn from '../src/Turn.js';
import FullTurn from '../src/FullTurn.js';
import FastTurn from '../src/FastTurn.js';

import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);

chai.spy.on(DOMupdates, ['surveySays', 'updateScore', 'correctAnswerDing', 'showRedX', 'wrongAnswerBuzzer', 'startTimer', 'updateTimer'], () => true);


describe('FullTurn', () => {
  let game;
  beforeEach(() => {
    game = new Game(data);
    game.startGame();
    game.currentRound.beginRound();
  });

  it('should be a function that instantiates a FullTurn', () => {
    expect(FullTurn).to.be.a('function');
    expect(game.currentRound.currentTurn).to.be.an.instanceof(FullTurn);
  });
  
  it('should receive information from Turn', () => {
    let answer1 = game.currentSurvey[1].answer;
    expect(game.currentRound.currentTurn.currentPlayer.name).to.equal('');
    expect(game.currentRound.currentTurn.currentSurvey[1].answer).to.equal(answer1);
  });

  it('should receive and check a correct player guess', () => {
    let answer1 = game.currentSurvey[1].answer;
    game.currentRound.currentTurn.checkGuess(answer1);
    expect(DOMupdates.correctAnswerDing).to.have.been.called(1);
    expect(game.currentRound.currentTurn.correctGuesses.length).to.equal(1);
    expect(game.currentRound.currentTurn.correctGuesses[0]).to.equal(answer1.toLowerCase());
  });

  it('should receive and check a previously used correct guess', () => {
    let answer1 = game.currentSurvey[1].answer;
    let answer2 = game.currentSurvey[2].answer;
    game.currentRound.currentTurn.checkGuess(answer1);
    game.currentRound.currentTurn.checkGuess(answer2);
    game.currentRound.currentTurn.checkGuess(answer2);
    expect(game.currentRound.currentTurn.correctGuesses.length).to.equal(2);
    expect(DOMupdates.showRedX).to.have.been.called(1);
  });

  it('should receive and check an incorrect guess', () => {
    let answer1 = game.currentSurvey[1].answer;
    let answer2 = game.currentSurvey[2].answer;
    game.currentRound.currentTurn.checkGuess(answer1);
    game.currentRound.currentTurn.checkGuess(answer2);
    game.currentRound.currentTurn.checkGuess('wrong');
    expect(game.currentRound.currentPlayer).to.deep.equal(game.playerTwo);
    expect(DOMupdates.showRedX).to.have.been.called(2);
    expect(DOMupdates.wrongAnswerBuzzer).to.have.been.called(1);
  });

  it('should end the round if all answers have been guessed', () => {
    let answer1 = game.currentSurvey[1].answer;
    let answer2 = game.currentSurvey[2].answer;
    let answer3 = game.currentSurvey[3].answer;
    game.currentRound.currentTurn.correctGuesses = [answer1, answer2];
    game.currentRound.currentTurn.checkGuess(answer3);
    expect(game.roundCounter).to.equal(2);
    expect(DOMupdates.surveySays()).to.equal(true);
  });
})

describe('FastTurn', () => {
let game;
beforeEach(() => {
  game = new Game(data);
  game.startGame();
  game.roundCounter = 3;
  game.startNextRound();
  game.currentRound.beginRound();
  });

  it('should be a function that instantiates a FastTurn', () => {
    expect(FullTurn).to.be.a('function');
    expect(game.currentRound.currentTurn).to.be.an.instanceof(FastTurn);
  });

  it('should start the timer when the player is ready', () => {
    game.currentRound.currentTurn.startFastTurn();
    expect(DOMupdates.startTimer).to.have.been.called(1);
  });

  it('should store an array of guesses', () => {
    game.currentRound.currentTurn.compileGuess('hi');
    game.currentRound.currentTurn.compileGuess('byeeeee');
    expect(game.currentRound.currentTurn.guesses).to.deep.equal(['hi', 'byeeeee']);
  });

  it('should remove incorrect guesses from the guesses array', () => {
    let answer1 = game.currentSurvey[1].answer;
    let answer2 = game.currentSurvey[2].answer;
    game.currentRound.currentTurn.compileGuess(answer1);
    game.currentRound.currentTurn.compileGuess(answer2);
    game.currentRound.currentTurn.compileGuess('wrong');
    expect(game.currentRound.currentTurn.guesses.length).to.equal(3);
    game.currentRound.currentTurn.removeIncorrectGuess();
    expect(game.currentRound.currentTurn.guesses.length).to.equal(2);
  });
  
  it('should calculate points earned for the turn', () => {
    let answer1 = game.currentSurvey[1].answer;
    let answer2 = game.currentSurvey[2].answer;
    let respondents1 = game.currentSurvey[1].respondents;
    let respondents2 = game.currentSurvey[2].respondents;
    game.currentRound.currentTurn.compileGuess(answer1);
    game.currentRound.currentTurn.compileGuess(answer2);
    game.currentRound.currentTurn.updateScore();
    expect(game.playerOne.score).to.equal(respondents1 + respondents2);
  })

  it('should calculate the player points with the correct multiplier', () => {
    let answer1 = game.currentSurvey[1].answer;
    let answer2 = game.currentSurvey[2].answer;
    let respondents1 = game.currentSurvey[1].respondents;
    let respondents2 = game.currentSurvey[2].respondents;
    game.currentRound.currentTurn.compileGuess(answer1);
    game.currentRound.currentTurn.compileGuess(answer2);
    game.currentRound.currentTurn.updateScore();
    expect(game.playerOne.score).to.equal((respondents1 + respondents2) * game.playerOne.multiplier);
  });

  it('should have a working timer', () => {
    game.currentRound.currentTurn.seconds = 2;
    game.currentRound.currentTurn.startFastTurn();
    expect(this.currentRound.currentTurn.seconds).to.equal(0);
  });

});
