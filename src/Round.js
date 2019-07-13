class Round {
  constructor(playerOne, playerTwo, currentSurvey) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentSurvey = currentSurvey;

  }
}

class FullRound extends Round {
  constructor(playerOne, playerTwo, currentSurvey) {
    super(playerOne, playerTwo, currentSurvey)
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentSurvey = currentSurvey;
    this.turnCounter = 1;
    this.currentPlayer;
    
  }
}

export default Round;