const linearSearch = require('../../searching/linear');
const { binarySearch } = require('../../searching/binary');
const jumpSearch = require('../../searching/jump');
const interpolationSearch = require('../../searching/interpolation');
const exponentialSearch = require('../../searching/exponential');

const arr = [1, 3, 5, 7, 9, 11, 13, 15];

describe.each([
    ['linear', linearSearch],
    ['binary', binarySearch],
    ['jump', jumpSearch],
    ['interpolation', interpolationSearch],
    ['exponential', exponentialSearch],
])('%s search', (_name, fn) => {
    test('found', () => expect(fn(arr, 7)).toBe(3));
    test('not found', () => expect(fn(arr, 4)).toBe(-1));
    test('first', () => expect(fn(arr, 1)).toBe(0));
    test('last', () => expect(fn(arr, 15)).toBe(7));
});
