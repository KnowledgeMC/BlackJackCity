console.log("JS Linked!")

var dealerTotal = 0;
var playerTotal = 0;
var gameWon = false;

var bankroll = 1000; //Might implement if I have time

var deck = {};

var dealerCards = [];
var playerCards = [];


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


