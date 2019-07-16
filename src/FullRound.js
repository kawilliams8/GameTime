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
    }
  
    continueRound() {
      if (this.currentPlayer === this.playerOne) {
        this.currentPlayer = this.playerTwo;
      } else if (this.currentPlayer === this.playerTwo) {
        this.currentPlayer = this.playerOne;
      }
      console.log(this.currentPlayer)
      this.currentTurn = new FullTurn(this, this.currentPlayer, this.currentSurvey, this.correctGuesses);
      DOMupdates.displayCurrentTurn((this.currentPlayer.name), this.currentSurvey[0].question);
      // If false, invoke endRound.
    }
  
    endRound() {
      this.game.roundCounter++;
      this.game.startNextRound();
      console.log(this.game)
      //increment Game.roundCounter & stop instantiating turns
      //invoke game to start next round
    }
  }

  export default FullRound;