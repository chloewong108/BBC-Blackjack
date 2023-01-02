const {
  myDeck,
  dealTwoCards,
  getValue,
  hit,
  startGame,
  myHand,
  aceCard,
  minusAce,
  stand,
} = require("../blackjack");

describe("Blackjack game", () => {
  describe("Scenario 1: When I am dealt an opening hand, I have 2 cards:", () => {
    test("The deck should be an array-object", () => {
      const testDeck = myDeck();
      expect(typeof testDeck).toBe("object");
    });
    test("should have 52 cards in total", () => {
      const testDeck = myDeck();
      expect(testDeck.length).toBe(52);
    });
    test("should contain at least the following cards in the array deck", () => {
      const testDeck = myDeck();
      expect(testDeck).toContain("A of hearts");
      expect(testDeck).toContain("2 of diamonds");
      expect(testDeck).toContain("K of spades");
      expect(testDeck).toContain("8 of clubs");
    });
    test("should shuffle the array and give random cards", () => {
      const testDeck1 = myDeck();
      const testDeck2 = myDeck();
      expect(testDeck1).not.toBe(testDeck2);
    });
    // test("should return the total score of less than 22 when dealt an opening hand", () => {
    //   const testGame = dealTwoCards(myDeck());
    //   expect(typeof testGame).toBe("number");
    //   //expect(testGame).toBeLessThan(22);
    // }); - affects start game function
    test("should test that each card J Q or K should be worth 10", () => {
      const testGame = getValue(["J of hearts"]);
      expect(testGame).toBe(10);
    });
    test("should test that given an Ace, the card should be worth 11", () => {
      const testGame = getValue(["A of spades"]);
      expect(testGame).toBe(11);
    });
    test("should return the value of the number when passed a number", () => {
      const testGame = getValue(["3 of hearts"]);
      expect(testGame).toBe(3);
    });
  });
  describe("Scenario 2: Given I have a valid hand of cards, when I choose hit I receive another card and my score is updated", () => {
    // test("should return another card from the deck", () => {
    //   arr = ["A of spades","3 of hearts","5 of clubs"]
    //   const testHit = hit(arr);
    //   expect(arr.length).toBe(2);
    // });
    // EFFECTS THE STARTGAME FUNCTION
    test("hit function should allow me to recieve another card", () => {
      const testStartGame = startGame(myDeck());
      //dealTwoCards(myDeck());
      //console.log(score);
      // expect(score).toBeGreaterThan(0)
      expect(myHand.length).toBe(2);
      hit(myDeck());
      console.log(testStartGame);
      expect(myHand.length).toBe(3);
    });
  });
  describe("Scernario 3: Given I have a valid hand of cards, when i choose stand, I recieve no further cards and my score is evaluated", () => {
    test("should return 1 if there is an ace card", () => {
      const testAceCard = aceCard(["A of hearts"]);
      expect(testAceCard).toBe(1);
    });
    test("if the player score is greater than 21, recieving an Ace should minus 10.", () => {
      const testMinusAce1 = minusAce(25, 1);
      expect(testMinusAce1).toBe(15);
      const testMinusAce2 = minusAce(30, 1);
      expect(testMinusAce2).toBe(20);
    });
    test("if the player card is less than 21 and recivees an Ace card should return the original score.", () => {
      const testMinusAce = minusAce(18, 1);
      expect(testMinusAce).toBe(18);
    });
    test("the function stand should not recieve another card and my score is evaluated ", () => {
      const testStand = stand();
    });
  });
});
