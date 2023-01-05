const { dealTwoCards, hit, stand, myHand } = require("../blackjack");

describe("Scenario 5: Given of when i have a score of 21 or more i am 'BUST!'.", () => {
  test("should return with 'BUST!' if score is less than 21 ", () => {
    const testGame = dealTwoCards(["10 of hearts", "5 of diamonds"]);
    hit(["Q of spades"]);
    const testStand = stand();
    expect(testStand).toEqual([25, "BUST!"]);
  });
});
