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
    test("should be dealt 2 cards with opening hand ", () => {
      const testGame = dealTwoCards();
      expect(testGame.length).toBe(2);
    });
    test("should return the score with 10 if card is NaN, JQK", () => {
      const testGame = getValue();
      expect().toBe(10);
    });
  });
});
