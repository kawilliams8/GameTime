import $ from 'jquery';
import './css/base.scss';
import './images/family-feud_board.png';
import './images/family-feud_splash.png';
import './images/player-one_face.png';
import './images/player-one_turned.png';
import './images/player-one_podium.png';
import './images/player-two_face.png';
import './images/player-two_turned.png';
import './images/player-two_podium.png';
import './images/red-x.png';

import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
import FullTurn from '../src/FullTurn.js';
import Round from '../src/Round.js';
import FullRound from '../src/FullRound.js';
import Game from '../src/Game.js';
import DOMupdates from '../src/DOMupdates.js';

let game;

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data")
  .then(response => response.json())
  .then(dataset => game = new Game(dataset.data))
  .catch(error => console.log(error))

$(document).ready(() => {
  $('.board').hide();
})

$('.main-button__submit-name').on('click', (e) => {
  $('.splash').hide();
  $('.board').show();
  $('.redx').hide();
  game.playerOne.name = $('.main-input__player-one').val();
  game.playerTwo.name = $('.main-input__player-two').val();
  $('.main-span__player-one-name').text(game.playerOne.name);
  $('.main-span__player-two-name').text(game.playerTwo.name);
  $('.main-h3__player-one-name').text(game.playerOne.name);
  $('.main-h3__player-two-name').text(game.playerTwo.name);
})

$('.main-button__start-game').on('click', () => {
  DOMupdates.startGame(game);
})

$('.main-button__submit-guess').on('click', () => {
  DOMupdates.turnCheckGuess(game);
  $('.main-input__guess-input').val('');
})

$('.main-section__guess-input').keypress((e) => {
  var key = e.which;
  if (key == 13 && game.currentSurvey.length > 0) {
    DOMupdates.turnCheckGuess(game);
    $('.main-input__guess-input').val('');
  }
})