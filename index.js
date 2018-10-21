// Execution terminal code: 
// set NODE_ENV=development&& npm --silent start
// Note!! development&& - no space there. && ends this parameter and thia part of the command

// This also works:
// set NODE_ENV=development&& set PORT=1000&&  npm --silent start


// The "use strict" directive was new in ES5.
// It enforce some limitations and code error protections.
'use strict'

let PORT = process.env.PORT

// load .env in local development
if (process.env.NODE_ENV === 'development' || process.env.PORT === undefined) {
    const dotenv = require('dotenv')
    const result = dotenv.config()

    if (result.error) {
        throw result.error
    }
    if (result.parsed.PORT === undefined) {
        throw new Error(
            `Expected PORT environment variable but got undefined. Please update npm command or dotenv file`
        )
    }

    PORT = result.parsed.PORT
}


const logger = require('./logger.js').getLogger(process.env.LOG_LEVEL || 'info')

const semver = require('semver')
const pkg = require('./package.json')
//const config = require('./config')

// validate Node version requirement
const runtime = {
    expected: semver.validRange(pkg.engines.node),
    actual: semver.valid(process.version)
}

const valid = semver.satisfies(runtime.actual, runtime.expected)
if (!valid) {
    throw new Error(
        `Expected Node.js version ${runtime.expected}, but found v${runtime.actual}. Please update or change your runtime!`
    )
}

