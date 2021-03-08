const CloseWay = require('./lib');

// tests
const authOptions = '12312';
const options = {lat: 1, lon: 22};

const new1 = new CloseWay({authOptions})
new1.getCurrentLocation(options)

module.exports = CloseWay;