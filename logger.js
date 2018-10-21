const winston = require('winston')
const logger = winston.createLogger({
  //level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp} | ${info.level} | ${info.message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});


module.exports.getLogger= function(level){
    logger.level = level || logger.level.info;
    return logger;
}
