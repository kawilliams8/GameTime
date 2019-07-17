
import $ from 'jquery';
import './css/base.scss';
import './images/family-feud_board.gif';
import './images/family-feud_splash.gif';

// import data from '../src/Data.js';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
import FullTurn from '../src/FullTurn.js';
import Round from '../src/Round.js';
import FullRound from '../src/FullRound.js';
import Game from '../src/Game.js';
import DOMupdates from '../src/DOMupdates.js';

//Fetch data
let data;
let game;

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data")
.then(response => response.json())
.then(dataset => data = dataset.data)
.catch(error => console.log(error))

$(document).ready(() => {
  $('.board').hide();
  //Things to happen on pageload
  //Load background image
  //Make splash appear
})

$('.main-button__submit-name').on('click', (e) => {
  $('.splash').hide();
  $('.board').show();
  game = new Game(data);
  game.playerOne.name = $('.main-input__player-one').val();
  game.playerTwo.name = $('.main-input__player-two').val();
  $('.main-span__player-one-name').text(game.playerOne.name);
  $('.main-span__player-two-name').text(game.playerTwo.name);
  DOMupdates.addBoardImage();
  // console.log(data)
});

$('.main-button__start-game').on('click', () => {
  DOMupdates.startGame(game);
});

$('.main-button__submit-guess').on('click', () => {
  DOMupdates.turnCheckGuess(game);
  $('.main-input__guess-input').val('');
})