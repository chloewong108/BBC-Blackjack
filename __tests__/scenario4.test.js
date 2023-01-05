const { dealTwoCards, hit, stand, getValue } = require("../blackjack");

describe("Scenario 4: Given when my score is updated or evaluated when i have a score of 21 or less i have a valid hand.", () => {
  test("should return with 'Hit?' if score is less than 21 ", () => {
    const testGame = dealTwoCards(["3 of hearts", "3 of diamonds"]);
    hit(["10 of spades"]);
    const testStand = stand();
    expect(testStand).toEqual([16, "Hit?"]);
  });
});
