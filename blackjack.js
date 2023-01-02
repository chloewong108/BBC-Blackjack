let score = 0;
let myHand = [];
let ace = 0;
let canHit = true;

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
  let cardScore = 0;
  const getCard1 = arr.pop();
  const getCard2 = arr.pop();
  myHand.push(getCard1, getCard2);
  cardScore += getValue(getCard1);
  cardScore += getValue(getCard2);

  score += cardScore;
}

function getValue(data) {
  let cardScore = 0;
  const cardOne = data[0].split(" of ");
  const value1 = cardOne[0];

  if (/\d/.test(value1) === false) {
    if (value1 === "A") {
      return (cardScore += 11);
    }
    return (cardScore += 10);
  }
  return (cardScore += parseInt(value1));
}

function hit(arr) {
  const getAdditionalCard = arr.pop();
  score += getValue(getAdditionalCard);
  return myHand.push(getAdditionalCard);
}

function startGame(arr) {
  dealTwoCards(arr);
  console.log(score, myHand);
  //hit(arr);

  return [score, myHand];
}

function stand() {
  score = minusAce(score, ace);

  let message = "";
  if (score > 21) {
    message = "BUST!";
  } else {
    if (score < 21) {
      message = "You Win!";
    }
  }
  console.log(message);
}

function aceCard(card) {
  const aceSplit = card[0].split(" of ");
  if (aceSplit[0] === "A") {
    return 1;
  } else {
    return 0;
  }
}

function minusAce(score, ace) {
  if (score > 21 && ace > 0) {
    score -= 10;
    ace -= 1;
  }
  return score;
}

module.exports = {
  myDeck,
  dealTwoCards,
  getValue,
  hit,
  startGame,
  myHand,
  aceCard,
  minusAce,
  stand,
};
