const bubbleSort = require('../../sorting/bubble');
const selectionSort = require('../../sorting/selection');
const insertionSort = require('../../sorting/insertion');
const { mergeSort } = require('../../sorting/merge');
const { quickSort } = require('../../sorting/quick');
const heapSort = require('../../sorting/heap');
const countingSort = require('../../sorting/counting');
const radixSort = require('../../sorting/radix');

const cases = [
    { name: 'empty', input: [], expected: [] },
    { name: 'single', input: [1], expected: [1] },
    { name: 'sorted', input: [1, 2, 3], expected: [1, 2, 3] },
    { name: 'reverse', input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { name: 'dupes', input: [3, 1, 3, 2, 1], expected: [1, 1, 2, 3, 3] },
    {
        name: 'random',
        input: [64, 25, 12, 22, 11],
        expected: [11, 12, 22, 25, 64],
    },
];

describe.each([
    ['bubble', bubbleSort],
    ['selection', selectionSort],
    ['insertion', insertionSort],
    ['merge', mergeSort],
    ['quick', quickSort],
    ['heap', heapSort],
    ['counting', countingSort],
    ['radix', radixSort],
])('%s sort', (_name, fn) => {
    cases.forEach(({ name, input, expected }) => {
        test(name, () => {
            expect(fn([...input])).toEqual(expected);
        });
    });
});
