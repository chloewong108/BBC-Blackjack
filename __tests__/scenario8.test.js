const { dealTwoCards, stand, hit } = require("../blackjack");

describe("Scenario 8: Given I have an 9, Ace and another Ace my score is 21.", () => {
  test("should return with 'Blackjack!' if score is 21 with an 9, an Ace and a another Ace", () => {
    const testGame = dealTwoCards(["9 of hearts", "A of diamonds"]);
    hit(["A of clubs"]);
    const testStand = stand();
    expect(testStand).toEqual([21, "Blackjack!"]);
  });
});
