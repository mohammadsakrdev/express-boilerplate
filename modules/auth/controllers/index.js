const customerRegisterController = require('./customer-register');
const loginController = require('./login');
const tokenForSocialLoginController = require('./token-for-social-login');
const socialCallbackController = require('./social-callback');
const verifyPhoneNumberController = require('./phone-verification');
const confirmPhoneNumberController = require('./phone-confirmation');
const verifyEmailController = require('./email-verification');
const confirmEmailController = require('./email-confirmation');
const forgetPasswordController = require('./password-forget');
const resetPasswordController = require('./password-reset');

module.exports = {
  customerRegisterController,
  loginController,
  tokenForSocialLoginController,
  socialCallbackController,
  verifyPhoneNumberController,
  confirmPhoneNumberController,
  verifyEmailController,
  confirmEmailController,
  forgetPasswordController,
  resetPasswordController
};
