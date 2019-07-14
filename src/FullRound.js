import Round from './Round.js'
import FullTurn from './FullTurn.js';

class FullRound extends Round {
    constructor(game, startingPlayer) {
      super(game, startingPlayer)
      this.currentPlayer = startingPlayer;
      this.correctGuesses = [];
      this.currentTurn;
    }
  
    beginRound() {
      this.currentTurn = new FullTurn(this, this.currentPlayer, this.currentSurvey);
    }
  
    continueRound() {
      //if this.correctGuesses.length !== 3 create new turn. If false, invoke endRound.
    }
  
    endRound() {
      console.log('This is the end!')
      //increment Game.roundCounter & stop instantiating turns
      //invoke game to start next round
    }
  }

  export default FullRound;