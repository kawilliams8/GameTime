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

}

export default Round;