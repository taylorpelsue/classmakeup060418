const princesses = [
  //similar to an object
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});
const names = princesses.map(function(princess) {
  return princess.name;
});
console.log("names: ", names);
//filter
const mNames = names.filter(function(name) {
  return name.startsWith("M");
});
console.log("m-names: ", mNames);

const sum = princesses.reduce(function(sum, princess) {
  return sum + princess.age;
}, 0);
const average = sum / princesses.length;
console.log("average age: ", average);
