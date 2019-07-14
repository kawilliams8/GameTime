import Player from '../src/Player.js';

class Game {
	constructor(data) {
		this.data = data;
		this.roundCounter = 1;
		this.usedSurveys = [];
		this.currentSurvey; 
	}
	startGame(playerOne, playerTwo) {
		let player1 = new Player(playerOne);
		let player2 = new Player(playerTwo);
		return player2, player1
	// choose our survey and update used surveys
	// instantiate the new players
	// start our first full round with players and survey
	// round.beginRound()
	}

	startNextRound() {
	// determineFullorFast?
	// select the survey
  // if full startFullRound(survey);
	// if fast startFastRound(survey);
	}

	selectSurvey() {
	// selects survey
	// updates the used surveys on the game
	}

	determineFullorFast() {
	// what number is the round counter on?
	// is the game tied?
	//
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