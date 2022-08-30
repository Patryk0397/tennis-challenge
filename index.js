import Match from './Match.js';

let match = new Match("Player1", "Player2");

  match.pointWonBy("Player1");
  match.pointWonBy("Player2");
  // this will return "0-0, 15-15"
  console.log(match.score());

  match.pointWonBy("Player1");
  match.pointWonBy("Player1");
  // this will return "0-0, 40-15"
  console.log(match.score());

  match.pointWonBy("Player2");
  match.pointWonBy("Player2");
  // this will return "0-0, Deuce"
  console.log(match.score());

  match.pointWonBy("Player1");
  // this will return "0-0, Advantage Player1"
  console.log(match.score());

  match.pointWonBy("Player1");
  // this will return "1-0"
  console.log(match.score());
