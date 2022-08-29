import { assert } from "chai";
import Player from "../Player.js";

describe('Player', () => {
  let player = new Player('Player1');
  beforeEach(() => {
    player = new Player('Player1');
  });

  describe('constructor', () => {
    it('Should have Player1 defined', () => {
      assert.isDefined(player);
    });
    it('Should have players name defined as Player1', () => {
      assert.equal(player.name, 'Player1');
    });
    it('Should have players score set to 0 on initialization', () => {
      assert.equal(player.gameScore, 0);
    });
  });
  describe('addPoint', () => {
    it('Should have the function defined', () => {
      assert.isDefined(player.addPoint);
    });
    it('Should add a point to the players score', () => {
      assert.equal(player.gameScore, 0);
      player.addPoint();
      assert.equal(player.gameScore, 1);
    });
  });
});
