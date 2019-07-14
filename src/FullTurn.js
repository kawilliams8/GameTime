import Turn from './Turn.js'
import Game from './Game.js';

class FullTurn extends Turn {
    constructor(currentRound, currentPlayer, currentSurvey, correctGuesses = []) {
      super(currentRound, currentPlayer, currentSurvey)
      this.currentRound = currentRound;
      this.currentPlayer = currentPlayer;
      this.correctGuesses = correctGuesses;
    }
  
    checkGuess(guess) {
      let answers = this.currentSurvey.map(object => {
        return object.answer;
      }).filter(answer => answer !== undefined);
      if (answers.includes(guess) && !this.correctGuesses.includes(guess)) {
        this.correctGuesses.push(guess);
        this.updateScore(guess);
      } else {
        this.currentRound.endRound();
      }
      // if guess wasn't correct, return and instantiate a new turn w/other player
    }
    
    updateScore(guess) {
      let points = this.currentSurvey.find(answer => {
        return answer.answer === guess;
      }).respondents;
      this.currentPlayer.score += points;
      if (this.checkEndOfTurn()) {
        
      };

      // get respondants amount
      // update score
      // DOMupdates with scores
    }
  
    checkEndOfTurn() {
      return this.correctGuesses.length === 3;
      // if this.correctGuesses.length === 3, new turn;
      // DOMupdates to notify if turn is over, maybe as the red x
      // DOMupdates to notify if it's still your turn 
    }
  }

export default FullTurn;