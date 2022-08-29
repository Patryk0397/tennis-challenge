// Player Class
export default class Player {
  constructor(name) {
    this.name = name;
    this.gameScore = 0;
    this.setScore = 0;
  }

  addPoint = () => {
    this.gameScore++;
  };

  addSetPoint = () => {
    this.setScore++;
  };

  resetScore = () => {
    this.gameScore = 0;
  };
}
