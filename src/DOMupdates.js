import $ from 'jquery';

const DOMupdates = {
	
	startGame(game) {
		game.startGame();
		$('.main-input__player-one').hide();
		$('.main-input__player-two').hide();
		$('.main-button__submit-name').hide();
	},

	sample() {
  },
  
  displayCurrentTurn(currentPlayerName, question) {
    $('.main-span__current-player').text(`${currentPlayerName}: `);
    $('.main-span__current-question').text(question);
    console.log(currentPlayerName);
  },

  turnCheckGuess(game) {
    let guess = $('.main-input__guess-input').val();
    game.currentRound.currentTurn.checkGuess(guess);
  },

  updateScore(player) {
    let currentName = player.name;
    let playerOne = $('.main-span__player-one-name').text();
    let playerTwo = $('.main-span__player-two-name').text();
    let scoreOne = $('.main-span__player-one-score');
    let scoreTwo = $('.main-span__player-two-score');
    currentName === playerOne ? scoreOne.text(player.score) : scoreTwo.text(player.score);

  }
}

export default DOMupdates;