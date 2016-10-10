console.log("JS Linked!")

var dealerTotal = 0;
var playerTotal = 0;
var gameWon = false;

var bankroll = 1000; //Might implement if I have time

var deckNames = [
  "sA", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "sJ", "sQ", "sK",
  "hA", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "hJ", "hQ", "hK",
  "cA", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "cJ", "cQ", "cK",
  "dA", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "dJ", "dQ", "dK",
  ];

var deckValues = {
  sA: 11, s2: 2, s3: 3, s4: 4, s5: 5, s6: 6, s7: 7, s8: 8, s9: 9, s10: 10, sJ: 10, sQ: 10, sK: 10,
  hA: 11, h2: 2, h3: 3, h4: 4, h5: 5, h6: 6, h7: 7, h8: 8, h9: 9, h10: 10, hJ: 10, hQ: 10, hK: 10,
  cA: 11, c2: 2, c3: 3, c4: 4, c5: 5, c6: 6, c7: 7, c8: 8, c9: 9, c10: 10, cJ: 10, cQ: 10, cK: 10,
  dA: 11, d2: 2, d3: 3, d4: 4, d5: 5, d6: 6, d7: 7, d8: 8, d9: 9, d10: 10, dJ: 10, dQ: 10, dK: 10,
};

var dealerCards = [];
var playerCards = [];

//Shuffle deckNames Array using Lodash
var shuffle = function(){
  _.shuffle(deckNames);
};

//deal function that picks random number between 1 and 52,
//and returns the number
var deal = function(){
  var card = Math.floor(Math.random() * 52) + 1;
  return card;
};



$('#start').on('click', function(){
  alert('Starting game now!');
});

// functions:
// draw/render

// deal

// gameWon?

// calculate playerTotal

// calculate dealerTotal


