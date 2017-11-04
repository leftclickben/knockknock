'use strict';

const expect = require('chai').expect;
const handler = require('../../../app/handler');
const createEvent = (sentence) => ({ queryStringParameters: { sentence } });

describe('The `reverseWords` endpoint', () => {
    it('Is a function', () => expect(handler.reverseWordsGet).to.be.a('function'));
    describe('When invoked', () => {
        describe('With an empty string', () => {
            it('Returns a JSON-encoded empty string', (next) => handler.reverseWordsGet(createEvent(''), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('')
                });
                next(error);
            }));
        });
        describe('With a string consisting of only whitespace', () => {
            it('Returns a JSON-encoded empty string', (next) => handler.reverseWordsGet(createEvent('   '), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('')
                });
                next(error);
            }));
        });
        describe('With a string consisting of a single word', () => {
            it('Returns a JSON-encoded string consisting of the word backwards', (next) => handler.reverseWordsGet(createEvent('motorcycle'), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('elcycrotom')
                });
                next(error);
            }));
        });
        describe('With a string consisting of a single word surrounded by whitespace', () => {
            it('Returns a JSON-encoded string consisting of the word backwards, including whitespace', (next) => handler.reverseWordsGet(createEvent('   motorcycle '), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('   elcycrotom ')
                });
                next(error);
            }));
        });
        describe('With a string consisting of multiple words', () => {
            it('Returns a JSON-encoded string consisting of each word backwards', (next) => handler.reverseWordsGet(createEvent('riding the motorcycle'), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('gnidir eht elcycrotom')
                });
                next(error);
            }));
        });
        describe('With a string consisting of multiple words separated by multiple spaces', () => {
            it('Returns a JSON-encoded string consisting of each word backwards', (next) => handler.reverseWordsGet(createEvent('   riding   the  motorcycle '), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('   gnidir   eht  elcycrotom ')
                });
                next(error);
            }));
        });
        describe('With a string consisting of words including numeric words', () => {
            it('Returns a JSON-encoded string consisting of each word backwards', (next) => handler.reverseWordsGet(createEvent('1300cc motorcycle'), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('cc0031 elcycrotom')
                });
                next(error);
            }));
        });
        describe('With a string consisting of words including symbols', () => {
            it('Returns a JSON-encoded string consisting of each word backwards', (next) => handler.reverseWordsGet(createEvent('P!u@n#c$t%u^a&t*i(o)n'), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify('n)o(i*t&a^u%t$c#n@u!P')
                });
                next(error);
            }));
        });
        describe('With a string consisting of words separated by mixed whitespace', () => {
            it('Returns a JSON-encoded string consisting of each word backwards and the whitespace not altered', (next) => handler.reverseWordsGet(createEvent(' \t1300cc  \t motorcycle\t  '), {}, (error, result) => {
                expect(result).to.deep.equal({
                    statusCode: 200,
                    body: JSON.stringify(' \tcc0031  \t elcycrotom\t  ')
                });
                next(error);
            }));
        });
    });
});
