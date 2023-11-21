import opts from '../src/components/Math.js';

const subtract = opts['-'];


describe('subtract', () => {
    test('subtract 0 and 0', () => {
        expect(subtract(0, 0)).toBe(0);
    });

    test('subtract 2 and 0', () => {
        expect(subtract(2, 0)).toBe(2);
    });

    test('subtract 0 and 2', () => {
        expect(subtract(0, 2)).toBe(-2);
    });

    test('subtract 2 and 1', () => {
        expect(subtract(2, 1)).toBe(1);
    });

    test('subtract 1 and 2', () => {
        expect(subtract(1, 2)).toBe(-1);
    });

    test('subtract 2 and 2', () => {
        expect(subtract(2, 2)).toBe(0);
    });

    test('subtract 2 and 3', () => {
        expect(subtract(2, 3)).toBe(-1);
    });

    test('subtract 3 and 2', () => {
        expect(subtract(3, 2)).toBe(1);
    });
});
