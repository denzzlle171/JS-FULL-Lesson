import absSquareNumb from './getMinSquaredNumber.js';

it('should get min squared absolut number from array, if array is empty', () => {
  const result = absSquareNumb([]);
  expect(result).toEqual(null);
});

it('should get min squared absolut number from array if array is string', () => {
  const result = absSquareNumb('string');
  expect(result).toEqual(null);
});

it('should get min squared absolut number from array', () => {
  const result = absSquareNumb([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
