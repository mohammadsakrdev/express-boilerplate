const express = require('express');

const passport = require('../../common/config/passport');
const requestValidator = require('../../common/middleware/requestValidator');
const {
  customerRegisterController,
  loginController,
  successCallbackController
} = require('./controllers');
const {
  customerRegisterSchema,
  loginSchema
} = require('./joi/validationSchemas');

const router = express.Router();

router.post(
  '/register',
  requestValidator(customerRegisterSchema),
  customerRegisterController
);
router.post('/login', requestValidator(loginSchema), loginController);

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
    failureRedirect: '/login'
  }),
  successCallbackController
);

// Redirect the user to Facebook for authentication
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: [
      'public_profile',
      'id',
      'displayName',
      'email',
      'first_name',
      'last_name',
      'link'
    ]
  })
);
// Facebook will redirect the user to this URL after approval.
// If access was granted, the user will be logged in. Otherwise authentication has failed.
router.get(
  '/facebook/callback',
  passport.authenticate(
    'facebook',
    {
      failureRedirect: '/login'
    },
    successCallbackController
  )
);

router.get(
  '/linkedin',
  passport.authenticate('linkedin', { scope: ['profile'] })
);

router.get(
  '/linkedin/callback',
  passport.authenticate('linkedin', {
    scope: ['profile', 'email'],
    failureRedirect: '/login'
  }),
  successCallbackController
);

module.exports = router;
