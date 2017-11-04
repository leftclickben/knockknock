'use strict';

module.exports = (a, b, c, callback) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return callback('Error');
    }
    if (a + b + c <= 2 * Math.max(a, b, c)) {
        return callback('Error');
    }
    if (a === b && b === c) {
        return callback('Equilateral');
    }
    if (a === b || b === c || c === a) {
        return callback('Isosceles');
    }
    return callback('Scalene');
};
