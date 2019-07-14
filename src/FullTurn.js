import Turn from './Turn.js'

class FullTurn extends Turn {
    constructor(currentPlayer, currentSurvey, correctGuesses = []) {
      super(currentPlayer, currentSurvey)
      this.currentPlayer = currentPlayer;
      this.correctGuesses = correctGuesses;
    }
  
    checkGuess(guess) {
      let answers = this.currentSurvey.map(object => {
        return object.answer;
      }).filter(answer => answer !== undefined);
      if (answers.includes(guess)) {
        this.correctGuesses.push(guess)
        this.updateScore(guess);
      }
      // if guess wasn't correct, return and instantiate a new turn w/other player
    }
    
    updateScore(guess) {
      let points = this.currentSurvey.find(answer => {
        return answer.answer === guess;
      }).respondents;
      this.currentPlayer.score += points;
      console.log('turns current player:', this.currentPlayer);

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

export default FullTurn;