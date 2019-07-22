class Round {
  constructor(game, startingPlayer) {
    this.playerOne = game.playerOne;
    this.playerTwo = game.playerTwo;
    this.startingPlayer = startingPlayer;
    this.currentSurvey = game.currentSurvey;
    this.currentTurn;
    this.roundType = "";
    this.game = game;
  }
  
  findCurrentPlayer() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    } 
  }
}

export default Round;