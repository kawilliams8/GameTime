
import $ from 'jquery';

import './css/base.scss';

import './images/turing-logo.png';
import data from '../src/Data.js';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
import FullTurn from '../src/FullTurn.js';
import Round from '../src/Round.js';
import FullRound from '../src/FullRound.js';
import Game from '../src/Game.js';
import DOMupdates from '../src/DOMupdates.js';

//Fetch data
let game = new Game(data);

$(document).ready(() => {
  $('.board').hide();
  //Things to happen on pageload
  //Load background image
  //Make splash appear
})

$('.main-button__submit-name').on('click', (e) => {
  $('.splash').hide();
  $('.board').show();
  game.playerOne.name = $('.main-input__player-one').val();
  game.playerTwo.name = $('.main-input__player-two').val();
  $('.main-span__player-one-name').text(game.playerOne.name);
  $('.main-span__player-two-name').text(game.playerTwo.name);
});

$('.main-button__start-game').on('click', () => {
  DOMupdates.startGame(game);
});
