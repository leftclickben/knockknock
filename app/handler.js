'use strict';

module.exports = { fibonacciGet, reverseWordsGet, tokenGet, triangleTypeGet };

const IS_NUMERIC = /^-?\d+$/;

function fibonacciGet (event, context, callback) {
    if (!IS_NUMERIC.test(event.queryStringParameters.n)) {
        return callback(null, { statusCode: 400, body: JSON.stringify({ message: 'The request is invalid' }) });
    }
    if (event.queryStringParameters.n.length > 3) {
        return callback(null, { statusCode: 400 });
    }
    const n = parseInt(event.queryStringParameters.n, 10);
    if (Math.abs(n) > 92) {
        return callback(null, { statusCode: 400 });
    }
    require('./calculators/fibonacci')(n, (result) => callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
    }));
}

function reverseWordsGet (event, context, callback) {
    require('./calculators/reverseWords')(event.queryStringParameters.sentence, (result) => callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
    }));
}

function tokenGet (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(event.stageVariables.readifyToken)
    });
}

function triangleTypeGet (event, context, callback) {
    if (!IS_NUMERIC.test(event.queryStringParameters.a) || !IS_NUMERIC.test(event.queryStringParameters.b) || !IS_NUMERIC.test(event.queryStringParameters.c)) {
        return callback(null, { statusCode: 400, body: JSON.stringify({ message: 'The request is invalid' }) });
    }
    const a = parseInt(event.queryStringParameters.a, 10);
    const b = parseInt(event.queryStringParameters.b, 10);
    const c = parseInt(event.queryStringParameters.c, 10);
    require('./calculators/triangleType')(a, b, c, (result) => callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
    }));
}
