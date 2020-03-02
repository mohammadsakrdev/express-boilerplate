const Joi = require('@hapi/joi');

module.exports = {
  /**
   * Customer register schema
   */
  customerRegisterSchema: {
    body: Joi.object()
      .required()
      .keys({
        fullName: Joi.string().required(),
        phoneNumber: Joi.string()
          // .regex(/^(\+2)?01([0-9]{9})$/)
          .required(),
        userName: Joi.string().required(),
        email: Joi.string().optional(),
        password: Joi.string()
          .required()
          .min(6),
        photo: Joi.string().optional()
      })
  },
  /**
   * Login schema
   */
  loginSchema: {
    body: Joi.object()
      .required()
      .keys({
        userName: Joi.string().required(),
        password: Joi.string().required()
      })
  }
};
