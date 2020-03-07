/* eslint-disable no-unused-vars */
const { OK, NO_CONTENT } = require('http-status-codes');

const asyncHandler = require('../../../common/middleware/async');
const User = require('../../user/user.schema');
const ErrorResponse = require('../../../common/utils/errorResponse');

// @desc      Confirm phone number
// @route     POST /api/v0/auth/phone/{phoneNumber}/confirm
// @access    Public
module.exports = asyncHandler(async (req, res, next) => {
  const { phoneNumber } = req.params;
  const { token } = req.body;

  // Create User
  const user = await User.findOneAndUpdate(
    {
      phoneNumber,
      'user.phoneVerification.token': token,
      'user.phoneVerification.tokenExpiration': { $gt: Date.now() }
    },
    {
      $set: {
        'user.phoneVerification.isVerified': true,
        'user.phoneVerification.token': null,
        'user.phoneVerification.tokenExpiration': null
      }
    },
    { new: true, runValidators: true }
  );

  if (!user) {
    return next(
      new ErrorResponse('Phone number not found or invalid token', NO_CONTENT)
    );
  }

  return res.status(OK).json({
    status: true,
    message: 'Phone number confirmed successfully',
    data: null
  });
});
