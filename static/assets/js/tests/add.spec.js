import opts from '../src/components/Math.js';

const add = opts['+'];


describe('add', () => {
    test('add 0 and 0', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('add 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
    });

    test('add 4 and 2', () => {
        expect(add(4, 2)).toBe(6);
    });

    test('add 4 and 6', () => {
        expect(add(4, 6)).toBe(10);
    });
});
