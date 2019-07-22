import DOMupdates from "./DOMupdates";

class Player {
  constructor(name = "") {
    this.name = name;
    this.score = 0;
    this.multiplier = 1;
  }

  updateFinalScore(points) {
    this.score += (points * this.multiplier)
    DOMupdates.updateScore(this.name, this.score);
  }
}

export default Player;