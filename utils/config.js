const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGODB_URI,
  mBroker: 'moose.rmq.cloudamqp.com',
  mPort: 1883,
  mTopic: 'uleam/',
  mUsername: 'hknjqmdx:hknjqmdx',
  mPassword: 'U8opewl4UsXEGQ9e3K-54YhuLGiR8BIm',
};
