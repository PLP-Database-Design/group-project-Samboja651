Total tests run = 20\
Tests passed = 19\
Test failed = 1

`npm test` output
>
> group-project-samboja651@1.0.0 test\
> jest

 FAIL  ./calculator.test.js\
  calculator.add\
    ✓ adds 4 + 3 to equal 7 (10 ms)\
    ✓ adds -3 + -4 to equal -7 (1 ms)\
    ✓ add -3 + 4 to equal 1 (1 ms)\
    ✓ add 4 + 0.5 to equal 4.5 (2 ms)\
  calculator.subtract\
    ✓ subtract 4 - 3 to equal 1 (1 ms)\
    ✓ subtract -3 - -4 to equal 1 (3 ms)\
    ✓ subtract -3 - 4 to equal -7 (2 ms)\
    ✓ subtract 4 - 0.5 to equal 3.5 (1 ms)\
  calculator.multiply\
    ✓ multiply 4 * 3 to equal 12 (1 ms)\
    ✓ multiply -3 * -4 to equal 12 (2 ms)\
    ✓ multiply -3 - 4 to equal -12 (2 ms)\
    ✓ subtract 4 * 0.5 to equal 2 (3 ms)\
    ✓ multiply 4 * 0 to equal 0 (2 ms)\
    ✓ multiply 4 * # to Match NaN (2 ms)\
  calculator.divide\
    ✓ divide 4 / 3 to be close to 1.3 (2 ms)\
    ✓ divide -3 / -4 to equal 0.75 (3 ms)\
    ✓ divide -3 / 4 to equal -0.75 (1 ms)\
    ✓ divide 4 / 0.5 to equal 8 (3 ms)\
    ✕ divide 4 / 0 to throw error (2 ms)\
    ✓ divide 0 / 4 to equal 0 (2 ms)\

  ● calculator.divide › divide 4 / 0 to throw error

    Cannot divide by zero

      14 |   function divide(a, b) {
      15 |     if (b === 0) {
    > 16 |       throw new Error("Cannot divide by zero");
         |             ^
      17 |     }
      18 |     return a / b;
      19 |   }

      at Object.divide (calculator.js:16:13)
      at Object.<anonymous> (calculator.test.js:87:27)

Test Suites: 1 failed, 1 total\
Tests:       1 failed, 19 passed, 20 total\
Snapshots:   0 total\
Time:        0.934 s, estimated 1 s\
Ran all test suites.

`TC_19 - divide 4 / 0 to throw error` failed. Wasn't able to capture the thrown error as an expexted result.
