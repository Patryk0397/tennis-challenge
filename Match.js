import Player from "./Player.js";
import scoreMap from "./constants/score-map.js";

// Match Class
export default class Match {
  constructor(player1, player2) {
    // Initializes two player objects
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
  }

  // Adds a point to a selected player
  pointWonBy = (player) => {
    player === this.player1.name && this.player1.addPoint();
    player === this.player2.name && this.player2.addPoint();
    return this.score();
  };

  resetGame = () => {
    this.player1.resetScore();
    this.player2.resetScore();
    this.winner = undefined;
  };

  // Checks the score and provides the current result
  score = () => {
    let player1Score = this.player1.gameScore;
    let player2Score = this.player2.gameScore;

    if (player1Score > 3 || player2Score > 3) {
      let difference = player1Score - player2Score;
      if (difference === 0) return "Deuce";
      else if (difference === 1) return `${this.player1.name}'s advantage`;
      else if (difference === -1) return `${this.player2.name}'s advantage`;
      else if (difference >= 2) {
        this.winner = this.player1.name;
        this.player1.addSetPoint();
        this.resetGame();
        return this.score();
      } else if (difference <= -2) {
        this.winner = this.player2.name;
        this.player2.addSetPoint();
        this.resetGame();
        return this.score();
      }
    } else if (player1Score === 3 && player2Score === 3) return "Deuce";

    return `${this.player1.setScore}-${this.player2.setScore} ${
      scoreMap[this.player1.gameScore]
    }-${scoreMap[this.player2.gameScore]}`;
  };
}
