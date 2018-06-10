const houses = ["Stark", "Lannister", "Targaryen", "Baratheon"];
//^const is used for array
const getRandomHouse = function (houses) {
  return houses[Math.floor(Math.random() * houses.length)];
};

const getMove = function () {
  const housesLeft = houses.slice(0);
  const defender = getRandomHouse(housesLeft);
  housesLeft.splice(housesLeft.indexOf(defender), 1);
  const attacker = getRandomHouse(housesLeft);

  return {
    text: `House ${attacker} has decided to attack!`,
    attacker: attacker,
    defender: defender
  };
};
const getLoser = function (move) {
  if (move.defender === "Targaryen") {
    return move.defender;
  }

  if (move.attacker === "Lannister") {
    return move.defender;
  }

  if (move.attacker === "Stark") {
    return move.attacker;
  }

  return move.defender;
};
const playGame = function () {
  const move = getMove();
  console.log(`Move: ${move.text}`);

  const loser = getLoser(move);
  houses.splice(houses.indexOf(loser), 1);

  console.log(`
  Loser: ${loser}
  Houses Left: ${houses.join(", ")}
  ---
  `);
};
while (houses.length > 1) {
  playGame();
}
console.log(`Winner: House ${houses[0]}`);
console.log("Runner up: ...When you play the game of thrones, you win or you die.");
