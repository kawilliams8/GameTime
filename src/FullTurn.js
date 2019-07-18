import Turn from './Turn.js'
import Game from './Game.js';
import DOMupdates from './DOMupdates.js';

class FullTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey, correctGuesses = []) {
    super(currentRound, currentPlayer, currentSurvey)
    this.currentRound = currentRound;
    this.currentPlayer = currentPlayer;
    this.correctGuesses = correctGuesses;
  }

  checkGuess(guess) {
    let answers = this.currentSurvey.filter(survey => survey.answer !== undefined).map(survey => {
      return survey.answer.toLowerCase();
    })
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
    let points = this.currentSurvey.filter(survey => survey.answer !== undefined)
      .find(survey => {
        let answer = survey.answer.toLowerCase();
        return answer === guess
      }).respondents;
    this.currentPlayer.score += points;
    let location = this.fillGameBoard(guess)
    DOMupdates.surveySays(location, guess, points);
    DOMupdates.updateScore(this.currentPlayer.name, this.currentPlayer.score);
    if (this.checkEndOfRound()) {
      this.currentRound.endRound();
    };
  }

  checkEndOfRound() {
    return this.correctGuesses.length === 3;
  }
  fillGameBoard(guess) {
    let index = this.currentSurvey.findIndex(answer => answer.answer === guess);
    if (index === 1) {
      return 'top';
    } else if (index === 2) {
      return 'middle';
    } else {
      return 'bottom';
    }
  }
}

export default FullTurn;