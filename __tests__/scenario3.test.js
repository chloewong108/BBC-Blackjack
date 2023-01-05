const { aceCheck, minusAce, stand, myHand } = require("../blackjack");

describe("Scernario 3: Given I have a valid hand of cards, when i choose stand, I recieve no further cards and my score is evaluated", () => {
  test("the function stand should not recieve another card", () => {
    const testStand = stand();
    expect(myHand.length).toBe(0);
  });
  test("should return 1 if there is an ace card", () => {
    const testAceCheck = aceCheck(["A of hearts"]);
    expect(testAceCheck).toBe(1);
  });
  test("should return 0 if there is no ace card", () => {
    const testAceCheck = aceCheck(["2 of spades"]);
    expect(testAceCheck).toBe(0);
  });
  test("if the player score is greater than 21, recieving an Ace should minus 10.", () => {
    const testMinusAce1 = minusAce(25, 1);
    expect(testMinusAce1).toBe(15);
    const testMinusAce2 = minusAce(30, 1);
    expect(testMinusAce2).toBe(20);
  });
  test("if the score is less than 21 and has an Ace it should not add to the score", () => {
    const testMinusAce = minusAce(18, 1);
    expect(testMinusAce).toBe(18);
  });
});
