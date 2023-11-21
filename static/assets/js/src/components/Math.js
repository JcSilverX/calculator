
/*-
 *  add -> n1 + n2
 */
const add = (a, b) => {
    return a + b;
};

/*-
 *  multiply -> n1 * n2
 */
const multiply = (a, b) => {
    return a * b;
};

/*-
 *  subtract -> n1 - n2
 */
const subtract = (a, b) => {
    return a - b;
};

/*-
 *  divide -> n1 / n2
 */
const divide = (a, b) => {
    if (b === 0.0) {
        return 'Error';
    }
    return Math.round((a / b) * 100) / 100;
};

const opts = {
    '+': add,
    '*': multiply,
    '-': subtract,
    '/': divide
};

export default opts;
