import Turn from './Turn';
import DOMupdates from './DOMupdates.js';
import Game from './Game';

class FastTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey) {
    super(currentRound, currentPlayer, currentSurvey)
    this.startingPlayer = currentPlayer;
    this.guesses = [];
    this.seconds = 15;
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
    this.calculateRespondents();
  }
  
  decrementTimer() {
    setTimeout(() => {
      this.seconds--;
      DOMupdates.updateTimer(this.seconds);
      this.seconds >= 1 ? this.decrementTimer() : this.removeIncorrectGuess();
    }, 1000);
  }
  
  calculateRespondents() {
    let matchingSurveys = this.currentSurvey.filter(survey => {
      if (survey.answer) {
        return survey;
      }
    })
      console.log('matching surverys', matchingSurveys)
      let points = matchingSurveys.reduce((totalPoints, matchingSurvey) => {
        this.currentSurvey.forEach(survey => {
          if(survey.answer === matchingSurvey.answer) {
            totalPoints += survey.respondents;
          }
        })
        return totalPoints;
      }, 0)
      console.log('Points', points)
      this.currentPlayer.updateFinalScore(points)
      console.log('current player score', this.currentPlayer.score)
      this.currentRound.endRound();
  }
}

export default FastTurn;