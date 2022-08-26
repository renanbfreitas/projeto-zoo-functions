const data = require('../data/zoo_data');

function getAnimalsOlderThan(specie, ageMin) {
  return data.species
    .find((element) => element.name === specie).residents
    .every((element) => element.age >= ageMin);
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
