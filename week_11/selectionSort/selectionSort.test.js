const selectionSort = require('./selectionSort');

test('sorts the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] in ascending order', () => {
  expect(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('sorts the array [9, 2, 5, 6, 4, 3, 7, 10, 1, 8] in ascending order', () => {
  expect(selectionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('sorts the array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] in ascending order', () => {
  expect(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});