import Turn from './Turn';
import DOMupdates from './DOMupdates.js';

class FastTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey) {
    super(currentRound, currentPlayer, currentSurvey)
    this.startingPlayer = currentPlayer;
    this.guesses = [];
    this.seconds = 30;
  }

  startFastTurn() {
    DOMupdates.startTimer();
  }

  compileGuess(guess) {
    this.guesses.push(guess.toLowerCase());
  }

  removeIncorrectGuess() {
    let answers = this.currentSurvey.filter(survey => {
      if (survey.answer) {
        return survey;
      };
    }).map(answer => answer.answer.toLowerCase())

    this.guesses = this.guesses.filter(guess => {
      if (answers.includes(guess.toLowerCase())) {
        return guess;
      };
    });
  }

}

export default FastTurn;