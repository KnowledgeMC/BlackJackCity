#_README for BlackJack City!_
![vegas](https://github.com/KnowledgeMC/BlackJackCity/blob/master/images/screenshot.png?raw=true)

[Play BlackJack City](https://knowledgemc.github.io/BlackJackCity/)

###Description:
BlackJack City is a simple one-player Blackjack game. 

Upon loading the site, a welcome screen is displayed and waits for the user to click the start button. The click event handler fades the welcome screen out and calls the shuffle function using jQuery. The shuffle function calls the createObjDeck function (which generates the deck of cards via a card constructor function) and then uses the _.shuffle method from Lodash to shuffle the deck. 

When the player clicks on the "deal" button, jQuery is used to call 


###Technologies Used: 
* HTML/CSS
* Javascript for game logic
* jQuery for DOM manipulation and event handlers
* Lodash for _.shuffle method


###Getting Started: 
BlackJack City follows the standard rules of Blackjack, leaving out some more complex actions for the sake of simplicity (such as doubling down or splitting a hand). The object of the game is to get a score as close to 21 without going over. All number cards have their respective values, all face cards have a value of 10, and the Ace can be either 11 or 1. The dealer will stand at 17.  

Once the player clicks on the start button, the welcome screen fades out to reveal the Blackjack table. The boxes labeled "Dealer's Cards" and "Player's Cards" are where the dealer's and player's cards will show up respectively once the game has started. Under each box is a smaller box that shows the calculated score of the hands once the game has begun. 

Clicking the "Deal" button starts the game and two cards are dealt out to the Player and Dealer. The Player has the option to either "Hit" and receive an additional card or "Stay" which turns the play over to the dealer. Once play has completed, an alert box will pop up to communicate the results to the player.  


###Unsolved Problems:
* The pop up alert box notifies the player of the result of the game before the cards are rendered to the screen. 
* The player can keep Hitting even though the game is over.

###Next Steps/Planned Features:
* Chips and a Betting system
* Multiple Hands
* Animations
* Option to Double Down
* Option to Split cards 
* Additional styling
* Responsive design 
* Replace Alert Box with custom designed one


