const { myDeck, dealTwoCards, getValue } = require("../blackjack");

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
    test("should return the total score of less than 22 when dealt an opening hand", () => {
      const testGame = dealTwoCards();
      expect(typeof testGame).toBe("number");
      expect(testGame).toBeLessThan(22);
    });
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
});
