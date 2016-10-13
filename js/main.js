console.log("JS Linked!");

var deck;
var dealerCards = [];
var playerCards = [];
// var bankroll = 1000; //Might implement if I have time

var deckNames = [
  "sA", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK",
  "hA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK",
  "cA", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK",
  "dA", "d02" , "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK",
  ];


function Card(cssName) {
  this.cssName = cssName;
  if (cssName.length === 3) {
    this.value = parseInt(cssName.slice(1))
  } else if (cssName.indexOf("A") > -1) {
    this.value = 11;
  } else {
    this.value = 10;
  }
};

function createObjDeck() {
  var deck = [];
  for (var i = 0; i < deckNames.length; i++) {
    deck.push(new Card(deckNames[i]));
  }
  return deck;
};

//Shuffle deckNames Array using Lodash (Maybe redundant)
var shuffle = function(){
  deck = _.shuffle(createObjDeck());
};

//deal function that picks random number between 1 and 52,
//and returns a card and removes it from the deckNames array
var deal = function(){
  // console.log(card);
  if (deck === undefined) {
    shuffle();
  }
  var card = Math.floor(Math.random() * deck.length);
  return deck.splice(card,1)[0];
};

var dealPlayer = function(){
  var playerCard = deal();
  playerCards.push(playerCard);
  var score = calcScore(playerCards);
  if(score >= 21){
    whoWon();
  }
};


function dealHand(hand) {
  hand.splice(0, hand.length);
  hand.push(deal(), deal());
  if(calcScore === 21){
    whoWon();
  }
};

function dealHouse() {
  while (calcScore(dealerCards) < 17) {
    dealerCards.push(deal());
  }
  whoWon();
};

////////Previous score calculation without Ace Logic!
// function calcScore(hand) {
//   var score = 0;
//     for(var i = 0; i < hand.length; i++){
//     score += hand[i].value;
//   };
//   return score;
// };
function calcScore(hand) {
var score=0;
var sortedCopy = hand.slice(0).sort(function(a,b){
    return a.value - b.value;
});
for(var i = 0; i < sortedCopy.length; i++){
    if(score + sortedCopy[i].value > 21 && sortedCopy[i].value === 11){
     score+=1;
    } else{
      score+= sortedCopy[i].value;
    }
  }
  return score;
};



var whoWon = function(){
  var dealerScore = calcScore(dealerCards);
  var playerScore = calcScore(playerCards);
  if (playerScore === 21 && dealerScore != 21){
    console.log("21! Player Wins!");
    window.alert("21! Player Wins!");
  } else if (playerScore > 21){
    console.log("Player Busts! Dealer Wins!");
    window.alert("Player Busts! Dealer Wins!");
  } else if (dealerScore === 21 && playerScore != 21){
    console.log("21! Dealer Wins!");
    window.alert("21! Dealer Wins!");
  } else if (playerScore > dealerScore && playerScore <= 21){
    console.log("Player Wins!");
    window.alert("Player Wins!");
  } else if (dealerScore > playerScore && dealerScore <= 21){
    console.log("Dealer Wins!");
    window.alert("Dealer Wins!");
  } else if (dealerScore > 21 && playerScore <=21){
    console.log("Dealer Busts! Player Wins!");
    window.alert("Dealer Busts! Player Wins!");
  } else if(dealerScore === playerScore){
    console.log("It's a Push!");
    window.alert("It's a Push!");
  }
  render();
};

function render() {
  $('#playerScore').text("Player: " + calcScore(playerCards));
  $('#dealerScore').text("Dealer: " + calcScore(dealerCards));

  // $('#player').
};
var dealerArray = ["#dealerCard1","#dealerCard2","#dealerCard3","#dealerCard4","#dealerCard5"];
var playerArray = ["#playerCard1","#playerCard2","#playerCard3","#playerCard4","#playerCard5"];

function cardRenderPlayer(){
  for(var i =0; i < playerCards.length; i++){
    $(playerArray[i]).css({'display': 'inline-block'});
    $(playerArray[i]).removeClass("back-red");
    $(playerArray[i]).addClass(playerCards[i].cssName);

  }
};

function cardRenderDealer(){
  for(var i =0; i < dealerCards.length; i++){
    $(dealerArray[i]).css({'display': 'inline-block'});
    $(dealerArray[i]).removeClass("back-red");
    $(dealerArray[i]).addClass(dealerCards[i].cssName);
  }
};

function cardResetPlayer(){
  for(var i =0; i<playerCards.length;i++){
    $(playerArray[i]).removeClass(playerCards[i].cssName);
    $(playerArray[i]).css({'display': 'none'});
  }
};
function cardResetDealer(){
  for(var i =0; i<dealerCards.length;i++){
    $(dealerArray[i]).removeClass(dealerCards[i].cssName);
    $(dealerArray[i]).css({'display': 'none'});
  }
};
// jQuery Hide class--display NONE
// $('#dealerCard3').css({'display': 'none'});

// Welcome screen and FadeOut
$('#start').on('click', function(){
  $(this).parent('#welcome').fadeOut(1000);
  shuffle();
});

$('#deal').on('click', function(){
  cardResetPlayer();
  cardResetDealer();
  dealHand(playerCards);
  dealHand(dealerCards);
  // $('#playerScore').text("Player: " + calcScore(playerCards));
  cardRenderPlayer();
  cardRenderDealer();
  render();
});

$('#hit').on('click', function(){
    dealPlayer();
    calcScore(playerCards);
    cardRenderPlayer();
    render();
});

$('#stay').on('click', function(){
    dealHouse();
    calcScore(dealerCards);
    cardRenderDealer();
    render();
});



