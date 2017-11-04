'use strict';

const expect = require('chai').expect;
const handler = require('../../../app/handler');
const createEvent = (n) => ({ queryStringParameters: { n: '' + n } });

describe('The `fibonacci` endpoint', () => {
    it('Is a function', () => expect(handler.fibonacciGet).to.be.a('function'));
    describe('When invoked', () => {
        describe('With -93 (and below)', () => {
            it('Returns a 400 response with no body', (next) => handler.fibonacciGet(createEvent(-93), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 400
                });
                next(error);
            }));
        });
        describe('With -92', () => {
            it('Returns -7540113804746346000', (next) => handler.fibonacciGet(createEvent(-92), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(-7540113804746346000)
                });
                next(error);
            }));
        });
        describe('With -10', () => {
            it('Returns -55', (next) => handler.fibonacciGet(createEvent(-10), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(-55)
                });
                next(error);
            }));
        });
        describe('With -3', () => {
            it('Returns 2', (next) => handler.fibonacciGet(createEvent(-3), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(2)
                });
                next(error);
            }));
        });
        describe('With -2', () => {
            it('Returns -1', (next) => handler.fibonacciGet(createEvent(-2), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(-1)
                });
                next(error);
            }));
        });
        describe('With -1', () => {
            it('Returns 1', (next) => handler.fibonacciGet(createEvent(-1), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(1)
                });
                next(error);
            }));
        });
        describe('With 0', () => {
            it('Returns 0', (next) => handler.fibonacciGet(createEvent(0), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(0)
                });
                next(error);
            }));
        });
        describe('With 1', () => {
            it('Returns 1', (next) => handler.fibonacciGet(createEvent(1), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(1)
                });
                next(error);
            }));
        });
        describe('With 2', () => {
            it('Returns 1', (next) => handler.fibonacciGet(createEvent(2), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(1)
                });
                next(error);
            }));
        });
        describe('With 3', () => {
            it('Returns 2', (next) => handler.fibonacciGet(createEvent(3), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(2)
                });
                next(error);
            }));
        });
        describe('With 42', () => {
            it('Returns 267914296', (next) => handler.fibonacciGet(createEvent(42), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(267914296)
                });
                next(error);
            }));
        });
        describe('With 92', () => {
            it('Returns 7540113804746346000', (next) => handler.fibonacciGet(createEvent(92), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(7540113804746346000)
                });
                next(error);
            }));
        });
        describe('With 93 (and above)', () => {
            it('Returns a 400 response with no body', (next) => handler.fibonacciGet(createEvent(93), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 400
                });
                next(error);
            }));
        });
        describe('With an enormous number', () => {
            it('Returns a 400 response with no body', (next) => handler.fibonacciGet(createEvent(9223372036854775807), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 400
                });
                next(error);
            }));
        });
        describe('With a non-numeric input', () => {
            it('Returns a HTTP 200 with a JSON error object', (next) => handler.fibonacciGet(createEvent('foo'), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 400,
                    body: JSON.stringify({
                        message: 'The request is invalid'
                    })
                });
                next(error);
            }));
        });
    });
});
