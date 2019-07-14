import Round from './Round.js'
import FullTurn from './FullTurn.js';

class FullRound extends Round {
    constructor(playerOne, playerTwo, currentSurvey, startingPlayer) {
      super(playerOne, playerTwo, currentSurvey, startingPlayer)
      this.currentPlayer = super.startingPlayer;
      this.correctGuesses = [];
      this.currentTurn;
    }
  
    beginRound() {
      this.currentTurn = new FullTurn(this.currentPlayer, this.currentSurvey);
    }
  
    continueRound() {
      //if this.correctGuesses.length !== 3 create new turn. If false, invoke endRound.
    }
  
    endRound() {
      //increment Game.roundCounter & stop instantiating turns
      //invoke game to start next round
    }
  }

  export default FullRound;