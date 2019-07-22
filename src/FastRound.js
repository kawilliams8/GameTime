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
    DOMupdates.showMultiplierInput();
    DOMupdates.displayCurrentTurn(this.currentPlayer.name, 'Click the Start Fast Money button to start your Fast Money Round!');
  }

  continueRound() {
    this.currentSurvey = this.game.selectSurvey();
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
    this.game.currentSurvey = [];
    this.game.selectSurvey();
    this.currentSurvey = this.game.currentSurvey;
    console.log('Player 2 survey', this.currentSurvey);
    DOMupdates.hideFastGuessInput();
    DOMupdates.showMultiplierInput();
    DOMupdates.displayCurrentTurn(this.currentPlayer.name, 'Click the Start Fast Money button to start your Fast Money Round!');
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