'use strict';

const expect = require('chai').expect;
const handler = require('../../../app/handler');
const createEvent = (a, b, c) => ({ queryStringParameters: { a: '' + a, b: '' + b, c: '' + c } });

describe('The `triangleType` endpoint', () => {
    it('Is a function', () => expect(handler.triangleTypeGet).to.be.a('function'));
    describe('When invoked', () => {
        describe('With any non-numeric input', () => {
            it('Returns a HTTP 400 with a JSON error object', (next) => handler.triangleTypeGet(createEvent('foo', 1, 2), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 400,
                    body: JSON.stringify({
                        message: 'The request is invalid'
                    })
                });
                next(error);
            }));
        });
        describe('With any zero', () => {
            it('Returns a HTTP 200 with "Error" as a JSON string', (next) => handler.triangleTypeGet(createEvent(0, 1, 2), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Error')
                });
                next(error);
            }));
        });
        describe('With any negative number', () => {
            it('Returns a HTTP 200 with "Error" as a JSON string', (next) => handler.triangleTypeGet(createEvent(-1, 1, 2), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Error')
                });
                next(error);
            }));
        });
        describe('With three equal positive numbers', () => {
            it('Returns "Equilateral" as a JSON string', (next) => handler.triangleTypeGet(createEvent(1, 1, 1), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Equilateral')
                });
                next(error);
            }));
        });
        describe('With two equal positive numbers and one other positive number', () => {
            it('Returns "Isosceles" as a JSON string', (next) => handler.triangleTypeGet(createEvent(3, 3, 1), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Isosceles')
                });
                next(error);
            }));
        });
        describe('With positive numbers that represent the sides of a right triangle', () => {
            it('Does not recognise right triangles -- Returns "Scalene" as a JSON string', (next) => handler.triangleTypeGet(createEvent(3, 4, 5), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Scalene')
                });
                next(error);
            }));
        });
        describe('With three different positive numbers', () => {
            it('Returns "Scalene" as a JSON string', (next) => handler.triangleTypeGet(createEvent(3, 6, 7), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Scalene')
                });
                next(error);
            }));
        });
        describe('With positive numbers that cannot represent the sides of a triangle', () => {
            it('Returns a HTTP 200 with "Error" as a JSON string', (next) => handler.triangleTypeGet(createEvent(3, 4, 42), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Error')
                });
                next(error);
            }));
        });
        describe('With positive numbers that can only represent a "triangle" with zero area', () => {
            it('Returns a HTTP 200 with "Error" as a JSON string', (next) => handler.triangleTypeGet(createEvent(3, 4, 7), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('Error')
                });
                next(error);
            }));
        });
    });
});
