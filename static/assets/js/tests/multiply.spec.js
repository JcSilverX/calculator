import opts from '../src/components/Math.js';

const multiply = opts['*'];


describe('multiply', () => {
    test('multiply 0 and 0', () => {
        expect(multiply(0, 0)).toBe(0);
    });

    test('multiply 2 and 0', () => {
        expect(multiply(2, 0)).toBe(0);
    });

    test('multiply 0 and 2', () => {
        expect(multiply(0, 2)).toBe(0);
    });

    test('multiply 2 and 1', () => {
        expect(multiply(2, 1)).toBe(2);
    });

    test('multiply 1 and 2', () => {
        expect(multiply(1, 2)).toBe(2);
    });

    test('multiply 2 and 2', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test('multiply 2 and 3', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('multiply 3 and 2', () => {
        expect(multiply(3, 2)).toBe(6);
    });
});
