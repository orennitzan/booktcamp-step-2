'use strict'

const logger = require('./src/logger.js').getLogger();
logger.info('index.js - Starting...');

// Initiation

require('./src/init')
    .initEnvironmentParameters()
    .validatePort();

// Web Init
require('./web/index.js')