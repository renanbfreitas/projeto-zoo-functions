const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {});
it('Retorna a quantidade de elefantes.', () => {
  const actual = handlerElephants('count');
  const expected = 4;
  expect(actual).toBe(expected);
});
it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
  const actual = handlerElephants('names');
  const expected = 'Jefferson';
  expect(actual).toContain(expected);
});
it('Retorna a média de idade dos elefantes', () => {
  const actual = handlerElephants('averageAge');
  const expected = 10.5;
  expect(actual).toBe(expected);
});
it('Retorna a localização dos elefantes dentro do zoológico', () => {
  const actual = handlerElephants('location');
  const expected = 'NW';
  expect(actual).toBe(expected);
});
it('Retorna a popularidade dos elefantes', () => {
  const actual = handlerElephants('popularity');
  const expected = 5;
  expect(actual).toBe(expected);
});
it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
  const actual = handlerElephants('availability');
  const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
  expect(actual).toEqual(expected);
});
it('Não passando argumentos a função deve retornar undefined', () => {
  const actual = handlerElephants();
  const expected = undefined;
  expect(actual).toBe(expected);
});
it('Passando um argumento que não seja string, a função deve retornar a mensagem de parâmetro inválido', () => {
  const actual = handlerElephants(1011);
  const expected = 'Parâmetro inválido, é necessário uma string';
  expect(actual).toBe(expected);
});
it('Passando argumentos inválidos, a função deve retornar null', () => {
  const actual = handlerElephants('testing');
  const expected = null;
  expect(actual).toBe(expected);
});
