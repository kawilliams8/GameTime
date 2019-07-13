import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
// import spies from 'chai-spies';
// import DOMupdates from '../src/DOMupdates.js';
// chai.use(spies);
// import data from '../src/Data.js';

// chai.spy.on(DOMupdates, 'updateLater', () => true);

describe('Turn', () => {
	let player1, player2, turn, survey;
	beforeEach(() => {
      player1 = new Player('Djavan');
      player2 = new Player('Katie');
      survey = [
      { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' }, 
      { answer: 'Beer', respondents: 67, surveyId: 1 }, 
      { answer: 'Donuts', respondents: 24, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 }
    ]
      turn = new Turn(player2, survey)
	});

	it('should be a function that instantiates a player', () => {
		expect(Turn).to.be.a('function');
		expect(turn).to.be.an.instanceof(Turn)
	});
})