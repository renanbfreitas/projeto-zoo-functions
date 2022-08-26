const data = require('../data/zoo_data');

const { species: animais } = data;
function countAnimals(animalQuant) {
  if (animalQuant === undefined) {
    return animais.reduce((element1, element2) => {
      const qtdAnimal = element1;
      qtdAnimal[element2.name] = element2.residents.length;
      return element1;
    }, {});
  } if (animalQuant.sex) {
    return animais
      .find((bichos) => (bichos.name === animalQuant.specie)).residents
      .filter((residem) => residem.sex === animalQuant.sex).length;
  }
  return animais.find((ani) => ani.name === animalQuant.specie).residents.length;
}

module.exports = countAnimals;
