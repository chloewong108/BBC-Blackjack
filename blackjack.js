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

  return deck;
}

function dealTwoCards(arr) {
  let score = 0;
  //   let myOpeningHand = [];

  const getCard1 = myDeck().pop();
  const getCard2 = myDeck().pop();
  //   myOpeningHand.push(getCard1, getCard2);
  score += getValue(getCard1);
  score += getValue(getCard2);

  console.log(score);

  return score;
}

function getValue(data) {
  let score = 0;
  const cardOne = data[0].split(" of ");
  const value1 = cardOne[0];

  console.log(value1);
  console.log(isNaN(value1));

  if (/\d/.test(value1) === false) {
    if (value1 === "A") {
      return (score += 11);
    }
    return (score += 10);
  }
  return (score += parseInt(value1));
}
module.exports = { myDeck, dealTwoCards, getValue };
