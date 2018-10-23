
// The "use strict" directive was new in ES5.
// It enforce some limitations and code error protections.
'use strict'


const logger = require('./src/logger.js').getLogger(process.env.LOG_LEVEL || 'info')
logger.info('index.js - Starting...\n')

const helperMethods = require('./src/helperMethods')

logger.debug('Initiation or Validating environment variabels.\n')

let PORT = process.env.PORT

// load .env in local development
if (process.env.NODE_ENV === 'development') {

    const result = helperMethods.getDotEnvVars();
    if (result.error) {
        throw result.error
    }
    if (result.parsed.PORT === undefined) {
        throw new Error(
            `Expected PORT environment variable but got undefined. Please update npm command or dotenv file`
        )
    }
    logger.debug(`Setting PORT to ${result.parsed.PORT}`)
    PORT = process.env.PORT = result.parsed.PORT
}

logger.debug('Environment variables:')
logger.debug('---------------------')
logger.debug(`PORT: ${PORT}\n`)

logger.debug('Validating node vertion.')
const semver = require('semver')
const pkg = require('./package.json')
// const config = require('./config')

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

logger.debug(`Running node version ${runtime.actual}.\n`)

logger.info('starting web service.\n')
require('./web/index.js')