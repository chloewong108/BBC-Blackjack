// scernarios:
//deck: [cards]
//me: [2 cards]
//make an array of cards
function myDeck() {
  let deck = [];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let suits = ["clubs", "diamonds", "hearts", "spades"];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push(values[i] + " of " + suits[j]);
    }
  }
  return deck;
}

module.exports = myDeck;
