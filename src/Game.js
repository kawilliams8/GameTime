import Player from '../src/Player.js';
import FullRound from './FullRound.js';

class Game {
	constructor(data, playerOne) {
		this.data = data;
		this.roundCounter = 1;
		this.usedSurveys = [];
		this.currentSurvey = []
		this.playerOne = new Player();
		this.playerTwo = new Player();
		this.currentRound;
	}

	selectSurvey() {
		let randomNum = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
		if (!this.usedSurveys.includes(randomNum)) {
			this.usedSurveys.push(randomNum);
			this.currentSurvey.push(this.data.surveys.find(survey => survey.id === randomNum)); 
			let answers = this.data.answers.filter(answer => answer.surveyId === randomNum).sort((a, b) => b.respondents - a.respondents);
			this.currentSurvey = this.currentSurvey.concat(answers);
		} else {
			this.selectSurvey();
		}
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
		this.roundCounter < 3 ? this.startFullRound() : this.startFastRound();
	// is the game tied?
	}

	startFullRound() {
		this.currentRound = new FullRound(this.playerOne, this.playerTwo, this.currentSurvey, this.returnStartingPlayer());
		// instantiates a new round
		this.currentRound.roundType = 'Full';
	// starts a full round using fullround.beginRound()
	}

	startFastRound() {
		this.currentRound = new FastRound(this.playerOne, this.playerTwo, this.currentSurvey, this.returnStartingPlayer());
	// instantiates a new round
		this.currentRound.roundType = 'Fast';
	// starts a fast round using fastround.beginRound()
	}

	returnStartingPlayer() {
		return this.roundCounter === 1 ? this.playerOne : this.playerTwo;
	}
}

export default Game;