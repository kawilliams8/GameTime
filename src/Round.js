class Round {
  constructor(playerOne, playerTwo, currentSurvey, startingPlayer) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.startingPlayer = startingPlayer;
    this.currentSurvey = currentSurvey;
    this.currentTurn;
    this.roundType = "";
  }
}

export default Round;