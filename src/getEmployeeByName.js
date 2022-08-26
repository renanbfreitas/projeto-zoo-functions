const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    (employees.firstName === employeeName || employees.lastName === employeeName));
}
console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
