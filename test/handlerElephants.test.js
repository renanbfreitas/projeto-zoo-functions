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
