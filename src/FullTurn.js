import Turn from './Turn.js'
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
    if (answers.includes(guess.toLowerCase()) && !this.correctGuesses.includes(guess.toLowerCase())) {
      //good guess, original guess
      DOMupdates.correctAnswerDing();
      this.correctGuesses.push(guess.toLowerCase());
      this.updateScore(guess);
    } else if (answers.includes(guess.toLowerCase()) && this.correctGuesses.includes(guess.toLowerCase())) {
      // good guess, repeat guess
      DOMupdates.showRedX();
      this.currentRound.correctGuesses = this.correctGuesses;
      this.currentRound.continueRound();
    } else if (!answers.includes(guess.toLowerCase())) {
      // bad guess
      // this.currentRound.endRound();
      DOMupdates.showRedX();
      DOMupdates.wrongAnswerBuzzer();
      this.currentRound.correctGuesses = this.correctGuesses;
      this.currentRound.continueRound();
    } else {
      console.log('BAD new checkGuess outcome');
    }
  }
  
  updateScore(guess) {
    let points = this.currentSurvey.find(survey => {
      if (survey.answer) {
        let answer = survey.answer.toLowerCase();
        return answer === guess.toLowerCase();
      }
    }).respondents;
    this.currentPlayer.score += points;
    let location = this.fillGameBoard(guess)
    DOMupdates.surveySays(location, guess, points);
    DOMupdates.updateScore(this.currentPlayer.name, this.currentPlayer.score);
    if (this.checkEndOfRound()) {
      this.currentRound.endRound();
    }
  }

  checkEndOfRound() {
    return this.correctGuesses.length === 3;
  }
  fillGameBoard(guess) {
    let index = this.currentSurvey.findIndex(survey => {
      if (survey.answer) {
        let answer = survey.answer.toLowerCase()
        return answer === guess
      }
    });
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