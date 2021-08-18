// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('compareNumbers guess is 15, correctNumber is 18', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(15, 18);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('compareNumbers guess is 18, correctNumber is 4', (expect) => {
    const expected = 1;
    const actual = compareNumbers(18, 4);
    expect.equal(actual, expected);
});

test('compareNumbers guess is 14, correctNumber 14', (expect) => {
    const expected = 0;
    const actual = compareNumbers(14, 14);
    expect.equal(actual, expected);
});