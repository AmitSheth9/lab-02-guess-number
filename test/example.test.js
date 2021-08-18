// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('compareNumbers when guess is 15, correctNumber is 18', (expect) => {
    const expected = -1;
    const actual = compareNumbers(15, 18);
    expect.equal(actual, expected);
});

test('compareNumbers when guess is 18, correctNumber is 4', (expect) => {
    const expected = 1;
    const actual = compareNumbers(18, 4);
    expect.equal(actual, expected);
});

test('compareNumbers when guess is 14, correctNumber 14', (expect) => {
    const expected = 0;
    const actual = compareNumbers(14, 14);
    expect.equal(actual, expected);
});