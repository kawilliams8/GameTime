import Turn from './Turn';
import DOMupdates from './DOMupdates.js';
import Game from './Game';

class FastTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey) {
    super(currentRound, currentPlayer, currentSurvey)
    this.startingPlayer = currentPlayer;
    this.guesses = [];
    this.seconds = 30;
  }

  startFastTurn() {
    DOMupdates.updateTimer(this.seconds);
    this.decrementTimer();
  }

  compileGuess(guess) {
    this.guesses.push(guess.toLowerCase());
    console.log(this.guesses)
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

  decrementTimer() {
    setTimeout(() => {
      this.seconds--;
      DOMupdates.updateTimer(this.seconds);
      this.seconds >= 1 ? this.decrementTimer() : this.currentRound.endRound();
    }, 1000);
  }

}

export default FastTurn;