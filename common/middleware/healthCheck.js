/* eslint-disable no-unused-vars */
const { OK } = require('http-status-codes');

// @desc App health check
const healthCheck = (req, res, next) => {
  return res.status(OK).json({
    success: true,
    message: 'U Med Mi is up & running.',
    data: null
  });
};

module.exports = healthCheck;
