const ErrorHandler = require("./errors");
const logger = require('./logger');

class closeWay {
  constructor({authOptions}) {
    if (!authOptions) {
      logger.error(`authOptions is required`);
    }
  }

  getCurrentLocation(options) {
    try {
      const {lat, lon} = options;
      if(!lat || !lon) {
        logger.error(`lat, lon in options is required`)
      }
      logger.log(`${lat} ${lon} req`)
    } catch (error) {
      throw new ErrorHandler({
        code: 5000,
        message: 'Error in main handler'
      })
    }
  }
}

module.exports = closeWay;