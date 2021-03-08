class Logger {
  log(data) {
    if (typeof data === 'object') {
      console.log(JSON.stringify(obj))
    }
    if (typeof data === 'string') {
      console.log(data);
    }
  }
  error(data) {
    if (typeof data === 'object') {
      console.error(JSON.stringify(obj))
    }
    if (typeof data === 'string') {
      console.error(data);
    }
  }
}
const logger = new Logger();
module.exports = logger;
