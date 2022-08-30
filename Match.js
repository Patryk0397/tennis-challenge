import Player from "./Player.js";
import scoreMap from "./constants/score-map.js";

// Match Class
export default class Match {
  constructor(player1, player2) {
    // Initializes two player objects
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.tieBreak = false;
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

    if (this.player1.gameScore === 6 && this.player2.gameScore === 6) {
      this.setTieBreak(true);
    }
  };

  setTieBreak = (tieBreak) => {
    this.tieBreak = tieBreak;
  };

  calculateGameScore = (player1Score, player2Score) => {
    if (player1Score > 3 || player2Score > 3) {
      let difference = player1Score - player2Score;
      if (difference === 0) return `${this.player1.gameScore}-${this.player2.gameScore}, Deuce`;
      else if (difference === 1) return `${this.player1.gameScore}-${this.player2.gameScore}, Advantage ${this.player1.name}`;
      else if (difference === -1) return `${this.player1.gameScore}-${this.player2.gameScore}, Advantage ${this.player2.name}`;
      else if (difference >= 2) {
        this.winner = this.player1.name;
        this.player1.addGamePoint();
        this.resetGame();
        return this.score();
      } else if (difference <= -2) {
        this.winner = this.player2.name;
        this.player2.addGamePoint();
        this.resetGame();
        return this.score();
      }
    } else if (player1Score === 3 && player2Score === 3) return `${this.player1.gameScore}-${this.player2.gameScore}, Deuce`;

    return `${this.player1.gameScore}-${this.player2.gameScore}, ${
      scoreMap[this.player1.score]
    }-${scoreMap[this.player2.score]}`;
  };

  // Separated from calculateGameScore for readability
  calculateTieBreakScore = (player1Score, player2Score) => {
    if (player1Score > 6 || player2Score > 6) {
      let difference = player1Score - player2Score;
      if (difference === 0) return `${this.player1.gameScore}-${this.player2.gameScore}, Advantage ${this.player1.name}`;
      else if (difference === 1) return `${this.player1.gameScore}-${this.player2.gameScore}, Advantage ${this.player1.name}`;
      else if (difference === -1) return `${this.player1.gameScore}-${this.player2.gameScore}, Advantage ${this.player2.name}`;
      else if (difference >= 2) {
        this.winner = this.player1.name;
        this.player1.addGamePoint();
        return `Set Score: 1-0 further functionality not required for this exercise`;
      } else if (difference <= -2) {
        this.winner = this.player2.name;
        this.player2.addGamePoint();
        return `Set Score: 0-1 further functionality not required for this exercise`;
      }
    } else if (player1Score === 7 && player2Score === 7) return `${this.player1.gameScore}-${this.player2.gameScore}, Advantage ${this.player1.name}`;

    return `${this.player1.gameScore}-${this.player2.gameScore}, ${this.player1.score}-${this.player2.score}`;
  };

  // Checks the score and provides the current result
  score = () => {
    if (!this.tieBreak)
      return this.calculateGameScore(this.player1.score, this.player2.score);

    return this.calculateTieBreakScore(this.player1.score, this.player2.score);
  };
}
