'use strict';

module.exports = (sentence, callback) => {
    if (sentence.trim().length === 0) {
        return callback('');
    }
    let word = '', result = '';
    sentence.split('').forEach((letter) => {
        if (/\s/.test(letter)) {
            result += word;
            word = '';
            result += letter;
        } else {
            word = letter + word;
        }
    });
    result += word;
    callback(result);
};
