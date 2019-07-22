import Player from '../src/Player.js';
import FullRound from './FullRound.js';
import FastRound from './FastRound.js';
import DOMupdates from './DOMupdates.js';

class Game {
  constructor(data) {
    this.data = data;
    this.roundCounter = 1;
    this.usedSurveys = [];
    this.currentSurvey = []
    this.playerOne = new Player('');
    this.playerTwo = new Player('');
    this.currentRound;
  } 
	
  selectSurvey() {
    let randomNum = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    if (!this.usedSurveys.includes(randomNum)) {
      this.usedSurveys.push(randomNum);
      this.currentSurvey.push(this.data.surveys.find(survey => survey.id === randomNum)); 
      let answers = this.data.answers.filter(answer => answer.surveyId === randomNum).sort((a, b) => b.respondents - a.respondents);
      this.currentSurvey = this.currentSurvey.concat(answers);
    } else {
      this.selectSurvey();
    }
  }  
	
  startGame() {
    this.selectSurvey();
    this.startFullRound();
    // console.log('New Game', this.currentRound.currentSurvey)
  // round.beginRound()
  }  
	
  startNextRound() {
    this.currentSurvey = [];
    this.selectSurvey();
    this.chooseFullorFast();
    DOMupdates.clearBoard();
  }  
	
  chooseFullorFast() {
    this.roundCounter < 3 ? this.startFullRound() : this.startFastRound();
  } 
	
  startFullRound() {
    this.currentRound = new FullRound(this, this.returnStartingPlayer());
    this.currentRound.roundType = 'Full';
    this.currentRound.beginRound();
    console.log(this.currentSurvey)
  } 
	
  startFastRound() {
	DOMupdates.displayFastRoundMsg();
    this.currentRound = new FastRound(this, this.returnStartingPlayer());
    this.currentRound.roundType = 'Fast';
    this.currentRound.beginRound();
    DOMupdates.updateFastRoundButtons();
    console.log(this.currentSurvey)
  }  
	
  returnStartingPlayer() {
    return this.roundCounter % 2 === 0 ? this.playerTwo : this.playerOne;
  }

  declareWinner() {
    this.playerOne.score > this.playerTwo.score ? DOMupdates.displayWinner(this.playerOne) : DOMupdates.displayWinner(this.playerTwo);
  }
}

export default Game;