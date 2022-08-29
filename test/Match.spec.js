import Match from '../Match.js';
import { assert } from 'chai';

describe('Match', () => {
  // Initialize a new Match
  let match = new Match("Player1", "Player2");

  // Resets the score for each tested scenario
  beforeEach( () => {
    match = new Match("Player1", "Player2");
  });

  describe('constructor', function () {
    it('Should have player 1 defined', () => {
      assert.isDefined(match.player1);
    });
    it('Should have player 2 defined', () => {
      assert.isDefined(match.player2);
    });
    it('should have player 1 with name Player1', () => {
      assert.equal(match.player1.name, 'Player1');
    });
    it('should have player 2 with name Player2', () => {
      assert.equal(match.player2.name, 'Player2');
    });
    it('should have player 1 with gameScore 0', () => {
      assert.equal(match.player1.gameScore, 0);
    });
    it('should have player 2 with gameScore 0', () => {
      assert.equal(match.player2.gameScore, 0);
    });
  });

  describe('score', () => {
    it('Should have the function defined', () => {
      assert.isDefined(match.score);
    });
    it('Should return 0-0 0-0', function () {
      assert.equal(match.score(), '0-0 0-0');
    });
    it('Should have an undefined winner', () => {
      assert.isUndefined(match.winner);
    })
    it('Should return scores when no player has won the set', () => {
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.equal(match.score(), '0-0 15-15');

      match.pointWonBy("Player1");
      assert.equal(match.score(), '0-0 30-15');

      match.pointWonBy("Player2");
      assert.equal(match.score(), '0-0 30-30');

      match.pointWonBy("Player1");
      assert.equal(match.score(), '0-0 40-30');
    });
    it('Should return Deuce when both players have scored 3 points', () => {
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), 'Deuce');
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), 'Deuce');
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.equal(match.score(), 'Deuce');
    });
    it('Should return Deuce when both players have the same score above 3 points', () => {
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), 'Deuce');
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), 'Deuce');
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.equal(match.score(), 'Deuce');
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.equal(match.score(), 'Deuce');
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.equal(match.score(), 'Deuce');
    });
    it('Should return Advantage when player 1 has scored 4 points and player 2 has scored 3 points', () => {
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), "Player1's advantage");
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), "Player1's advantage");
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), "Player1's advantage");
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      assert.notEqual(match.score(), "Player1's advantage");
      match.pointWonBy("Player1");
      assert.equal(match.score(), "Player1's advantage");
    });
    it('Should return 1-0 when player 1 has 4 or more points and are leading by 2', () => {
      match.pointWonBy("Player2");
      match.pointWonBy("Player1");
      match.pointWonBy("Player1");
      match.pointWonBy("Player1");
      match.pointWonBy("Player1");
      assert.equal(match.score(), "1-0 0-0");
    });
    it('Should return 0-1 when player 2 has 4 or more points and are leading by 2', () => {
      match.pointWonBy("Player2");
      match.pointWonBy("Player1");
      match.pointWonBy("Player2");
      match.pointWonBy("Player2");
      match.pointWonBy("Player2");
      assert.equal(match.score(), "0-1 0-0");
    });
  });
  describe('pointWonBy', () => {
    it('Should have the function defined', () => {
      assert.isDefined(match.pointWonBy);
    });
    it('Should increase player score on a point being won', () => {
      assert.equal(match.player1.gameScore, 0);
      match.pointWonBy("Player1");
      assert.equal(match.player1.gameScore, 1);
    });
    it('Should not increase the score of any players if provided player name does not exist', () => {
      assert.equal(match.player1.gameScore, 0);
      assert.equal(match.player2.gameScore, 0);
      match.pointWonBy("FAKE");
      assert.equal(match.player1.gameScore, 0);
      assert.equal(match.player2.gameScore, 0);
    });
  })
});
