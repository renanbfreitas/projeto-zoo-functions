const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((element) => ids.includes(element.id));
}

console.log(getSpeciesByIds(data));
module.exports = getSpeciesByIds;
