import { reverseArray, withdraw, getAdults } from './last-tasks.js';

it('should get reverse array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should get reverse array', () => {
  const result = reverseArray(['H', 'E', 'L', 'L', 'O']);
  expect(result).toEqual(['O', 'L', 'L', 'E', 'H']);
});

it("should get reverse array if array is'n array", () => {
  const result = reverseArray('456');
  expect(result).toEqual(null);
});
//////

/////
let clients = ['Den', 'John', 'Mike', 'Nikita', 'Julia'];
let balance = [97000, 84000, 20478, 103000, 2300];

it('should get residue after withdraw', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get residue after withdraw, when withdraw biger balance', () => {
  const result = withdraw(
    ['Den', 'John', 'Mike', 'Nikita', 'Julia'],
    [97000, 84000, 20478, 103000, 2300],
    'John',
    1500700
  );
  expect(result).toEqual(-1);
});

it('should get residue after withdraw nothing', () => {
  const result = withdraw(
    ['Den', 'John', 'Mike', 'Nikita', 'Julia'],
    [97000, 84000, 20478, 103000, 2300],
    'Den',
    0
  );
  expect(result).toEqual(97000);
});
//

///
it('get oll people why age 18 and over ', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('get oll people why age 18 and over, if oll yanger 18 ', () => {
  const result = getAdults({ Tom: 9, Lilit: 17, Den: 4 });
  expect(result).toEqual({});
});

it('get oll people why age 18 and over, if oll older 18 ', () => {
  const result = getAdults({ Tom: 46, Lilit: 27, Den: 30 });
  expect(result).toEqual({ Tom: 46, Lilit: 27, Den: 30 });
});
