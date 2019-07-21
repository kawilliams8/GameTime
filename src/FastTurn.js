import Turn from './Turn';
import DOMupdates from './DOMupdates.js';

class FastTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey) {
    super(currentRound, currentPlayer, currentSurvey)
    this.startingPlayer = currentPlayer;
    this.seconds = 30;
  }

}

export default FastTurn;