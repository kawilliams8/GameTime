import Player from '../src/Player.js';

class Game {
	constructor(data, playerOne) {
		this.data = data;
		this.roundCounter = 1;
		this.usedSurveys = [];
		this.currentSurvey;
		this.playerOne = new Player();
		this.playerTwo = new Player();
		this.currentRound;
	}

	selectSurvey() {
		// choose random num
		// selects survey
		// updates the used surveys on the game
		// choose our survey and update used surveys
	}

	startGame() {
	// start our first full round with players and survey
	// round.beginRound()
	}

	startNextRound() {
	// determineFullorFast?
	// assign this.currentRoundType to "full" or "fast"
	// select the survey
  // if full startFullRound(survey);
	// if fast startFastRound(survey);
	}

	chooseFullorFast() {
	// what number is the round counter on?
	// is the game tied?
	// return the decision based on the round counter
	}

	startFullRound() {
	// instantiates a new round
	// starts a full round using fullround.beginRound()
	}

	startFastRound() {
	// instantiates a new round
	// starts a fast round using fastround.beginRound()
	}
}

export default Game;