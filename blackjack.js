function myDeck() {
  let deck = [];
  const values = [
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
  const suits = ["clubs", "diamonds", "hearts", "spades"];
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push(values[i] + " of " + suits[j]);
    }
  }
  deck.sort(() => Math.random() - 0.5);
  // sort() sorts the array out randomly, Math.random() gives a random number between 0-1, -0.5 will give a value of less than 0, 0 or greater than zero this determines the positioning of the cards.
  return deck;
}

function dealTwoCards() {
  let myOpeningHand = [];

  const getCard1 = myDeck().pop();
  const getCard2 = myDeck().pop();
  myOpeningHand.push(getCard1, getCard2);

  return myOpeningHand;
}

function getValue() {
  let score = 0;

  const data = dealTwoCards();
  const cardOne = data[0].split("of");
  const cardTwo = data[1].split("of");

  const value1 = cardOne[0];
  const value2 = cardTwo[0];
  console.log(value1);
  if (isNaN(value1)) {
    score += 10; // -> JQK
  } else {
    if (value1 === "A") {
      score += 11;
    }
    score += parseInt(value1); // -> changes string to number
  }
  return score;
}

module.exports = { myDeck, dealTwoCards, getValue };
