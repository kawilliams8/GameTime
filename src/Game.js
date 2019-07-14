import Player from '../src/Player.js';

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