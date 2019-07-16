import $ from 'jquery';

const DOMupdates = {
	
	startGame(game) {
		game.startGame();
		$('.main-input__player-one').hide();
		$('.main-input__player-two').hide();
		$('.main-button__submit-name').hide();
	},

	addBoardImage() {
		$('.main').addClass('game-board__backgroundImage');
	}
}

export default DOMupdates;