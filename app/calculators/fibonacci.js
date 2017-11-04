'use strict';

module.exports = (n, callback) => {
    const results = [];
    if (n === 0) {
        return callback(0);
    }
    for (let i in [...new Array(Math.abs(n)).keys()]) {
        results.push(i <= 1 ? 1 : results[i-2] + results[i-1]);
    }
    callback(Math.sign(n) * ((n > 0 || n % 2 === 0) ? 1 : -1) * results[Math.abs(n) - 1]); // -1 because numbering starts at 1
};
