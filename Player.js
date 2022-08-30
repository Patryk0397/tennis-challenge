// Player Class
export default class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gameScore = 0;
  }

  addPoint = () => {
    this.score++;
  };

  addGamePoint = () => {
    this.gameScore++;
  };

  resetScore = () => {
    this.score = 0;
  };
}
