'use strict'

const helperMethods = {

    getDotEnvVars: () => {
        const dotenv = require('dotenv');
        const result = dotenv.config();
        return result;
    },

    getDotEnvVar_PORT: () => {
        const dotenv = require('dotenv');
        const result = dotenv.config();
        return result.parsed.PORT;
    },
    getEnvVar_PORT: () => {
        return process.env.PORT;
    },
}
module.exports = helperMethods;