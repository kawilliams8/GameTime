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
        //good guess, original guess
        this.correctGuesses.push(guess);
        this.updateScore(guess);
      } else if (answers.includes(guess) && this.correctGuesses.includes(guess)) {
        // good guess, repeat guess
        this.currentRound.correctGuesses = this.correctGuesses;
        this.currentRound.continueRound();
      } else if (!answers.includes(guess)){
        // bad guess
        // this.currentRound.endRound();
        this.currentRound.correctGuesses = this.correctGuesses;
        this.currentRound.continueRound();
      } else {
        console.log('new checkGuess outcome');
        //Goal is delete this else eventually
      }
      // if guess wasn't correct, return and instantiate a new turn w/other player
    }
    
    updateScore(guess) {
      let points = this.currentSurvey.find(answer => {
        return answer.answer === guess;
      }).respondents;
      this.currentPlayer.score += points;
      if (this.checkEndOfRound()) {
        this.currentRound.endRound();
      };
    }
  
    checkEndOfRound() {
      return this.correctGuesses.length === 3;
    }
  }

export default FullTurn;