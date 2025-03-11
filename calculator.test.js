const calculator = require('./calculator');

// add
describe('calculator.add', () => {
    // positive number test
    test('adds 4 + 3 to equal 7', () => {
        expect(calculator.add(4, 3)).toBe(7);
    });
    // negative number test
    test('adds -3 + -4 to equal -7', () => {
        expect(calculator.add(-3, -4)).toBe(-7);
    });
    test('add -3 + 4 to equal 1', () => {
        expect(calculator.add(-3, 4)).toBe(1);
    });
    // decimal number test
    test('add 4 + 0.5 to equal 4.5', () => {
        expect(calculator.add(4, 0.5)).toBe(4.5);
    });
});

// subtract
describe('calculator.subtract', () => {
    // positive number test
    test('subtract 4 - 3 to equal 1', () => {
        expect(calculator.subtract(4, 3)).toBe(1);
    });
    // negative number test
    test('subtract -3 - -4 to equal 1', () => {
        expect(calculator.subtract(-3, -4)).toBe(1);
    });
    test('subtract -3 - 4 to equal -7', () => {
        expect(calculator.subtract(-3, 4)).toBe(-7);
    });
    // decimal number test
    test('subtract 4 - 0.5 to equal 3.5', () => {
        expect(calculator.subtract(4, 0.5)).toBe(3.5);
    });
});

// multiply
describe('calculator.multiply', () => {
    // positive number test
    test('multiply 4 * 3 to equal 12', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });
    // negative number test
    test('multiply -3 * -4 to equal 12', () => {
        expect(calculator.multiply(-3, -4)).toBe(12);
    });
    test('multiply -3 - 4 to equal -12', () => {
        expect(calculator.multiply(-3, 4)).toBe(-12);
    });
    // decimal number test
    test('subtract 4 * 0.5 to equal 2', () => {
        expect(calculator.multiply(4, 0.5)).toBe(2);
    });
    // mutiplication by zero
    test('multiply 4 * 0 to equal 0', () => {
        expect(calculator.multiply(4, 0)).toBe(0);
    });
    // multiplication of non numerics
    test('multiply 4 * # to Match NaN', () => {
        expect(calculator.multiply(4, "#")).toBe(NaN);
    });
});

// divide
describe('calculator.divide', () => {
    // positive number test
    test('divide 4 / 3 to be close to 1.3', () => {
        expect(calculator.divide(4, 3)).toBeCloseTo(1.333);
    });
    // negative number test
    test('divide -3 / -4 to equal 0.75', () => {
        expect(calculator.divide(-3, -4)).toBe(0.75);
    });
    test('divide -3 / 4 to equal -0.75', () => {
        expect(calculator.divide(-3, 4)).toBe(-0.75);
    });
    // decimal number test
    test('divide 4 / 0.5 to equal 8', () => {
        expect(calculator.divide(4, 0.5)).toBe(8);
    });
    // division by zero
    test('divide 4 / 0 to throw error', () => {
        expect(calculator.divide(4, 0)).toThrow(Error);
    });
    // zero division
    test('divide 0 / 4 to equal 0', () => {
        expect(calculator.divide(0, 4)).toBe(0);
    });
});
