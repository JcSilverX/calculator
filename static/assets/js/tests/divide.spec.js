import opts from '../src/components/Math.js';

const divide = opts['/'];


describe('divide', () => {
    test('divide 0 and 0', () => {
        expect(divide(0, 0)).toEqual('Error');
    });

    test('divide 2 and 0', () => {
        expect(divide(2, 0)).toEqual('Error');
    });

    test('divide 0 and 2', () => {
        expect(divide(0, 2)).toBe(0);
    });

    test('divide 2 and 1', () => {
        expect(divide(2, 1)).toBe(2);
    });

    test('divide 1 and 2', () => {
        expect(divide(1, 2)).toBe(0.5);
    });

    test('divide 2 and 2', () => {
        expect(divide(2, 2)).toBe(1);
    });

    test('divide 2 and 3', () => {
        expect(divide(2, 3)).toBe(0.67);
    });

    test('divide 3 and 2', () => {
        expect(divide(3, 2)).toBe(1.5);
    });
});
