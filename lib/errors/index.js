const logger = require('../logger');

class ErrorHandler {

  constructor({code, message}) {
    if (code && message) {
      this.options = {
        code,
        message
      };
    }
    logger.error(`code is ${code}, message is ${message}`);
  }
}

module.exports = ErrorHandler;
