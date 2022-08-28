const data = require('../data/zoo_data');

const { species, employees } = data;
const arrResult = employees.map((objeto) => {
  const arr = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    locations: objeto.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return arr;
});

function getEmployeesCoverage(prt) {
  if (prt === undefined) return arrResult;
  const open = arrResult
    .find((element) => element.fullName.includes(Object.values(prt))
      || element.id.includes(Object.values(prt)));
  if (open === undefined) {
    throw new Error('Informações inválidas');
  }
  return open;
}

module.exports = getEmployeesCoverage;
