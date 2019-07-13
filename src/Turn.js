class Turn {
  constructor(currentPlayer, currentSurvey) {
    this.currentPlayer = currentPlayer;
    this.currentSurvey = currentSurvey;
  }
}

class FullTurn extends Turn {
  constructor(currentSurvey, correctGuesses = []) {
    super(currentPlayer, currentSurvey)
    this.currentPlayer = currentPlayer;
    this.currentSurvey = currentSurvey;
    this.correctGuesses = correctGuesses;
  }

  checkAnswer() { // this will be called by the submission button
    // if the guess was correct
    // push guess into the this.correctGuesses array
    // invokes updateScore()
    // if guess wasn't correct, return and instantiate a new turn w/other player
    // DOMupdates to flip answer on gameboard
  }
  
  updateScore() {
    // get respondants amount
    // update score
    // DOMupdates with scores
  }

  checkEndOfTurn() {
    // if this.correctGuesses.length === 3, new turn;
    // DOMupdates to notify if turn is over, maybe as the red x
    // DOMupdates to notify if it's still your turn 
  }
}

export {Turn, FullTurn, FastTurn};