import { calc } from './calculator.js';

it('should get sum of a & b', () => {
  const result = calc('2 + 3');
  expect(result).toEqual('2 + 3 = 5');
});

it('should get difference a & b', () => {
  const result = calc('6 - 4');
  expect(result).toEqual('6 - 4 = 2');
});

it('should get multiplay a to b', () => {
  const result = calc('3 * 4');
  expect(result).toEqual('3 * 4 = 12');
});
it('should get devide a to b', () => {
  const result = calc('10 / 2');
  expect(result).toEqual('10 / 2 = 5');
});

it('should get null if expression is not string', () => {
  const result = calc(10142);
  expect(result).toEqual(null);
});
