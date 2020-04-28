const express = require('express');
const passport = require('passport');

const requestValidator = require('../../common/middleware/requestValidator');
const isAuthorized = require('../../common/middleware/isAuthorized');
const {
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
} = require('./controllers');
const {
  customerRegisterSchema,
  loginSchema,
  phoneVerificationSchema,
  phoneConfirmationSchema,
  emailVerificationSchema,
  emailConfirmationSchema,
  forgetPasswordSchema,
  resetPasswordSchema
} = require('./joi/validationSchemas');

const {
  AUTH_EMAIL_VERIFICATION,
  AUTH_EMAIL_CONFIRMATION,
  AUTH_PHONE_VERIFICATION,
  AUTH_PHONE_CONFIRMATION
} = require('./endPoints');

const router = express.Router();

router.post(
  '/register',
  requestValidator(customerRegisterSchema),
  customerRegisterController
);
router.post('/login', requestValidator(loginSchema), loginController);
router.post(
  '/phone/:phoneNumber/verify',
  isAuthorized(AUTH_PHONE_VERIFICATION),
  requestValidator(phoneVerificationSchema),
  verifyPhoneNumberController
);
router.post(
  '/phone/:phoneNumber/confirm',
  isAuthorized(AUTH_PHONE_CONFIRMATION),
  requestValidator(phoneConfirmationSchema),
  confirmPhoneNumberController
);
router.post(
  '/email/verify',
  isAuthorized(AUTH_EMAIL_VERIFICATION),
  requestValidator(emailVerificationSchema),
  verifyEmailController
);
router.post(
  '/email/:encodedMail/confirm',
  isAuthorized(AUTH_EMAIL_CONFIRMATION),
  requestValidator(emailConfirmationSchema),
  confirmEmailController
);
router.post(
  '/forget-password',
  requestValidator(forgetPasswordSchema),
  forgetPasswordController
);
router.put(
  '/reset-password/:token',
  requestValidator(resetPasswordSchema),
  resetPasswordController
);
router.get(
  '/google',
  passport.authenticate('google', {
    session: false,
    scope: ['openid', 'profile', 'email']
  })
);

router.get(
  '/google/callback',
  socialCallbackController('google', ['openid', 'profile', 'email']),
  tokenForSocialLoginController
);

// Redirect the user to Facebook for authentication
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: ['public_profile', 'email']
  })
);
// Facebook will redirect the user to this URL after approval.
// If access was granted, the user will be logged in. Otherwise authentication has failed.
router.get(
  '/facebook/callback',
  socialCallbackController('facebook', ['public_profile', 'email']),
  tokenForSocialLoginController
);

router.get(
  '/linkedin',
  passport.authenticate('linkedin', {
    session: false,
    scope: ['profile', 'email']
  })
);

router.get(
  '/linkedin/callback',
  socialCallbackController('linkedin', ['profile', 'email']),
  tokenForSocialLoginController
);

module.exports = router;
