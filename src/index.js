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
import FastTurn from '../src/FastTurn.js';
import Round from '../src/Round.js';
import FullRound from '../src/FullRound.js';
import FastRound from '../src/FastRound.js';
import Game from '../src/Game.js';
import DOMupdates from '../src/DOMupdates.js';

let game;

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data")
  .then(response => response.json())
  .then(dataset => game = new Game(dataset.data))
  .catch(error => console.log(error))

$(document).ready(() => {
  new Audio('http://23.237.126.42/ost/family-feud-1993-snes/cxipbygzai/05%20Press%20Start%20Title%20Theme.mp3').play();
  $('.board').hide();
  $('.main-input__multiplier-input').hide();
  $('.main-input__fast-guess-input').hide();
  $('.roundSplash').hide();
})

$('.main-button__submit-name').on('click', (e) => {
  $('.splash').hide();
  $('.board').show();
  $('.redx').hide();
  $('.main-button__submit-multiplier').hide();
  $('.main-button__submit-guess').hide();
  $('.main-button__reset-game').hide();
  $('.main-button__start-fast-turn').hide();
  $('.main-button__submit-fast-guess').hide();
  game.playerOne.name = $('.main-input__player-one').val();
  game.playerTwo.name = $('.main-input__player-two').val();
  $('.main-span__player-one-name').text(game.playerOne.name);
  $('.main-span__player-two-name').text(game.playerTwo.name);
  $('.main-h3__player-one-name').text(game.playerOne.name);
  $('.main-h3__player-two-name').text(game.playerTwo.name);
})

$('.main-button__start-game').on('click', () => {
  DOMupdates.startGame(game);
  $('.main-button__submit-guess').show();
  $('.main-button__reset-game').show();
})

$('.main-button__submit-guess').on('click', () => {
  DOMupdates.turnCheckGuess(game);
  $('.main-input__guess-input').val('');
})

$('.main-input__guess-input').keypress((e) => {
  var key = e.which;
  if (key == 13 && game.currentSurvey.length > 0) {
    DOMupdates.turnCheckGuess(game);
    $('.main-input__guess-input').val('');
  }
})

$('.main-input__multiplier-input').keypress((e) => {
  var key = e.which;
  if (key == 13 && game.currentSurvey.length > 0) {
    game.currentRound.currentPlayer.multiplier = $('.main-input__multiplier-input').val();
    $('.main-input__multiplier-input').val('');
    $('.main-input__multiplier-input').hide();
    $('.main-input__fast-guess-input').show();
  }
})

$('.main-button__submit-multiplier').on('click', () => {
    game.currentRound.currentPlayer.multiplier = $('.main-input__multiplier-input').val();
    $('.main-input__multiplier-input').val('');
    $('.main-button__submit-multiplier').hide();
    $('.main-input__multiplier-input').hide();
    $('.main-button__submit-fast-guess').show();
    $('.main-input__fast-guess-input').show();
})

$('.main-input__fast-guess-input').keypress((e) => {
  var key = e.which;
  if (key == 13 && game.currentSurvey.length > 0) {
    let guess = $('.main-input__fast-guess-input').val();
    console.log("This is the entered guess", guess)
    game.currentRound.currentTurn.compileGuess(guess);
    $('.main-input__fast-guess-input').val('');
  }
})

$('.main-button__submit-fast-guess').on('click', () => {
  let guess = $('.main-input__fast-guess-input').val();
  game.currentRound.currentTurn.compileGuess(guess);
  $('.main-input__fast-guess-input').val('');
})

$('.main-button__start-fast-turn').on('click', () => {
  $('.main-button__submit-fast-guess').show();
  $('.main-button__submit-guess').hide();
  $('.main-span__current-question').text(game.currentSurvey[0].question);
  game.currentRound.currentTurn.startFastTurn();
})

$('.main-button__reset-game').on('click', () => {
  DOMupdates.resetGame();
});

$('.fastMoney-button').on('click', () => {
  DOMupdates.displayFastMoney();
});

// $('.winner-button').on('click', () => {
//   DOMupdates.resetGame();
// });