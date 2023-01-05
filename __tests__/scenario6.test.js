const { dealTwoCards, stand } = require("../blackjack");

describe("Scenario 6: Given I have an Ace and a King my score is 21.", () => {
  test("should return with 'Blackjack' if score is equal to 21 with an Ace and a King", () => {
    const testGame = dealTwoCards(["K of hearts", "A of diamonds"]);
    const testStand = stand();
    expect(testStand).toEqual([21, "Blackjack!"]);
  });
});
