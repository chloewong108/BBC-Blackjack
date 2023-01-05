const { dealTwoCards, stand, hit } = require("../blackjack");

describe("Scenario 7: Given I have an Queen, Ace and a King my score is 21.", () => {
  test("should return with 'Blackjack!' if score is than 21 with an Ace and a King", () => {
    const testGame = dealTwoCards(["K of hearts", "A of diamonds"]);
    hit(["Q of clubs"]);
    const testStand = stand();
    expect(testStand).toEqual([21, "Blackjack!"]);
  });
});
