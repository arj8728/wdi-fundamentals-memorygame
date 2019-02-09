
var cards =[
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",	
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",	
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",	
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",	
},
];

var listCards = function() { 
for (var i = 0; i < cards.length; i++) { 
console.log(cards[i].rank);
console.log(cards[i].cardImage); 
 } 
 };
 listCards(); 


var cardsInPlay = [];

var checkForMatch = function () { 
	if (cardsInPlay[1] === cardsInPlay[2]) 	
	{
	console.log("You found a match!");
} else {
	console.log("Sorry, try again");
}	
};

var flipCard = function (cardId) {	
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped" + cards[cardId].rank);
if (cardsInPlay.length === 2)
{checkForMatch();
}
};
flipCard(0);
flipCard(2);


