const { dealTwoCards, myHand, stand } = require("../blackjack");

describe("Scenario 1: When im dealt my opening hand i have 2 cards.", () => {
  test("should deal me 2 cards", () => {
    const testGame = dealTwoCards(["8 of clubs", "2 of spades"]);
    expect(myHand.length).toBe(2);
    const endGame = stand();
    expect(endGame[0]).toBe(10);
  });
});
