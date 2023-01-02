const { startGame, myHand, score } = require("../blackjack");

describe("Scenario 1: When im dealt my opening hand i have 2 cards.", () => {
  test("when the game starts, it returns an array of the the score and opening 2 cards", () => {
    const testStartGame = startGame();
    expect(testStartGame[0]).toBeGreaterThan(0);
    expect(testStartGame[1].length).toBe(2);
  });
});
