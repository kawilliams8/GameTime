import Round from './Round.js';
import FastTurn from './FastTurn.js';
import DOMupdates from './DOMupdates.js';

class FastRound extends Round {
  constructor(game, startingPlayer) {
    super(game, startingPlayer) 
    this.currentPlayer = startingPlayer;
    this.currentTurn;
  }

  beginRound() {
    this.currentTurn = new FastTurn(this, this.currentPlayer, this.currentSurvey);
    DOMupdates.displayCurrentTurn(this.currentPlayer.name, '');
    // DOMupdates.displayCurrentTurn(this.currentPlayer.name, this.currentSurvey[0].question);
  }

  continueRound() {
    console.log('continuing next fast turn')
    this.currentSurvey = this.game.selectSurvey();
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
    this.currentSurvey = this.game.selectSurvey();
    this.currentTurn = new FastTurn(this, this.currentPlayer, this.currentSurvey)
  }

  endRound() {
    if (this.currentPlayer === this.game.playerTwo) {
      this.game.declareWinner();
    } else {
      this.continueRound();
    }
  }
}

export default FastRound;