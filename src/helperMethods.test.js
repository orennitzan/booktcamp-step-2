'use strict'

const heplerMethods = require('./helperMethods');

test('Validate a PORT env variable is NOt falsy', () => {
    expect(heplerMethods.getDotEnvVar_PORT()).not.toBeFalsy();
});

test('Validate PORT exists in process.env.PORT', () => {
    expect(heplerMethods.getEnvVar_PORT()).toEqual('1995');
});

