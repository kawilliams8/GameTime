import Round from './Round.js'
import FullTurn from './FullTurn.js';
import DOMupdates from './DOMupdates.js';

class FullRound extends Round {
  constructor(game, startingPlayer) {
    super(game, startingPlayer)
    this.currentPlayer = startingPlayer;
    this.correctGuesses = [];
    this.currentTurn;
  }

  beginRound() {
    this.currentTurn = new FullTurn(this, this.currentPlayer, this.currentSurvey);
    DOMupdates.displayCurrentTurn((this.currentPlayer.name), this.currentSurvey[0].question);
    DOMupdates.turnHeadsForPlayers(this.currentPlayer.name);
  }

  continueRound() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
    this.currentTurn = new FullTurn(this, this.currentPlayer, this.currentSurvey, this.correctGuesses);
    DOMupdates.displayCurrentTurn((this.currentPlayer.name), this.currentSurvey[0].question);
    DOMupdates.turnHeadsForPlayers(this.currentPlayer.name);
  }

  endRound() {
    this.game.roundCounter++;
    this.game.startNextRound();
  }
}
export default FullRound;