const borrub = {
  race: "Orc",
  gender: "male",
  name: "Borrub",
  className: "Hunter",
  level: 14
};

let avatars = [
  {
    race: "Undead",
    gender: "female",
    name: "Tameli",
    className: "Rogue",
    level: 33
  },
  {
    race: "Human",
    gender: "female",
    name: "Fiana",
    className: "Mage",
    level: 10
  }
];
// Update function to use object rest to append the new avatar to the array
const addAvatar = avatar => [...avatars, avatar];

const greet = (avatar) => {
  const { name, level, gender, race, className } = avatar;
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

//destructure function parameters
const greet2 = ({ name, level, gender, race, className }) => {
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};
avatars = addAvatar(borrub);
// For each avatar, call greet function and pass in avatar as argument
avatars.forEach(greet);
