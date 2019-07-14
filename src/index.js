
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

let game = new Game(data)

const player1, player2;
let turn, round;

function createPlayers() {
  let playerOneName = $(//playerInput1).text();
  let playerTwoName = $(//playerInput2).text();
  player1 = new Player(playerOneName);
  player2 = new Player(playerTwoName);
  game.selectSurvey();
}
