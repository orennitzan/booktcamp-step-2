'use strict'

const logger = require('./src/logger.js').getLogger();
const semver = require('semver');
const pkg = require('./package.json');
logger.info('index.js - Starting...');

// Initiation

require('./src/init')
    .initEnvironmentParameters()
    .validatePort();

// Web Init
require('./web/index.js')