console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = {
  suit: ['hearts', 'clubs', 'spades', 'diamonds'],
  card: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
};

var cardDeck = [];

function generateDeck() {
  for (var i = 0; i < deck.suit.length; i++) {
    var eachSuit = deck.suit[i];
    for (var j = 0; j < deck.card.length; j++) {
      var eachCard = deck.card[j];
      var card = { Rank: eachCard, Suit: eachSuit };
      cardDeck.push(card);
    }
  }
  return cardDeck;
}

/// ------------------Shuffle function ----------------------

function shuffle() {
  for (var i = 0; i < 1000; i++) {
    var randomIndex = Math.floor(Math.random() * cardDeck.length);
    var randomIndexTwo = Math.floor(Math.random() * cardDeck.length);
    var shuffledIndex = cardDeck[randomIndex];

    cardDeck[randomIndex] = cardDeck[randomIndexTwo];
    cardDeck[randomIndexTwo] = shuffledIndex;
  }
}

// --------------Deal Function--------------------------
var players = [
  {
    name: 'James',
    hand: []
  },

  {
    name: 'Steve',
    hand: []
  },

  {
    name: 'Greg',
    hand: []
  },

  {
    name: 'Mike',
    hand: []
  }
];

function deal() {
  for (var i = 0; i < players.length; i++) {
    var eachPlayerHand = players[i].hand;
    var twoCards = cardDeck.splice(0, 2);
    eachPlayerHand.push(twoCards);
    twoCards = null;
  }
}

// -----------------Get Card Values ---------------------

function getHandScore() {

  var numberCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  var faceCards = ['J', 'Q', 'K'];
  var playerTotalScore = 0;

  for (var i = 0; i < players.length; i++) {
    var playersFirstCardValue = players[i].hand[0][0].Rank;
    var playersSecondCardValue = players[i].hand[0][1].Rank;
    if (numberCards.includes(playersFirstCardValue)) {
      playerTotalScore += Number(playersFirstCardValue);
    } else if (faceCards.includes(playersFirstCardValue)) {
      playerTotalScore += 10;
    } else {
      playerTotalScore += 11;
    }
    if (numberCards.includes(playersSecondCardValue)) {
      playerTotalScore += Number(playersSecondCardValue);
    } else if (faceCards.includes(playersSecondCardValue)) {
      playerTotalScore += 10;
    } else {
      playerTotalScore += 11;
    }
    players[i].score = playerTotalScore;
    playerTotalScore = 0;
  }
}

// -----------------Find Winner ---------------------

function findWinner() {
  var highScore = 0;
  var winner = null;
  for (var i = 0; i < players.length; i++) {
    var eachPlayerScore = players[i].score;
    if (eachPlayerScore > highScore) {
      highScore = eachPlayerScore;
      winner = players[i].name;
    }
  }
  console.log(`${winner} is the winner with a score of ${highScore}`);
}
