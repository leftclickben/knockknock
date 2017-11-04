'use strict';

const expect = require('chai').expect;
const handler = require('../../../app/handler');
const createEvent = (readifyToken) => ({ stageVariables: { readifyToken } });

describe('The `token` endpoint', () => {
    it('Is a function', () => expect(handler.tokenGet).to.be.a('function'));
    describe('When invoked', () => {
        it('Returns the token from the stage variable in the event', (next) => handler.tokenGet(createEvent('uuid-token'), {}, (error, result) => {
            expect(result).to.deep.equal({
                statusCode: 200,
                body: JSON.stringify('uuid-token')
            });
            next(error);
        }))
    });
});
