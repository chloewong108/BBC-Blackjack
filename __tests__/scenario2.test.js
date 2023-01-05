const { dealTwoCards, myHand, hit, stand } = require("../blackjack");

describe("Scenario 2: Given I have a valid hand of cards, when I choose hit I receive another card and my score is updated", () => {
  test("hit function should allow me to recieve another card", () => {
    const testGame = dealTwoCards(["8 of hearts", "10 of diamonds"]);
    expect(myHand.length).toBe(2);
    hit(["J of diamonds"]);
    const endGame = stand();
    expect(endGame[0]).toBe(28);
    expect(myHand.length).toBe(3);
  });
});
