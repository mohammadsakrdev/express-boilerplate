const Joi = require('@hapi/joi');

module.exports = {
  /**
   * Id schema
   */
  idSchema: {
    params: Joi.object().keys({
      id: Joi.string().required()
    })
  },
  /**
   * address schema
   */
  addressSchema: Joi.object()
    .optional()
    .keys({
      country: Joi.string().required(),
      city: Joi.string().required(),
      area: Joi.string().required(),
      addressLine: Joi.string().required()
    })
};
