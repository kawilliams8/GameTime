import Round from './Round.js'

class FullRound extends Round {
    constructor(playerOne, playerTwo, currentSurvey, startingPlayer) {
      super(playerOne, playerTwo, currentSurvey, startingPlayer)
      this.currentPlayer = super.startingPlayer;
      this.correctGuesses = [];
    }
  
    beginRound() {
      //instantiate fullTurn with currentPlayer object & this.correctGuesses & this.currentSurvey
      //this.correctGuesses is assigned to the correctGuesses array that the turn returns
      //
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