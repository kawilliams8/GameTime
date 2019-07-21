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
    this.currentTurn = new FastTurn(this, this.currentPlayer, this.currentSurvey)
  }

  continueRound() {
    this.currentSurvey = this.game.selectSurvey();
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
    this.currentTurn = new FastTurn(this, this.currentPlayer, this.currentSurvey)
  }

  endRound() {
    this.game.declareWinner();
  }
}

export default FastRound;