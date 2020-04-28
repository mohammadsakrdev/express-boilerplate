const { CUSTOMER, OPERATOR, SUPER_ADMIN } = require('../../enum/roles');
const superAdminPolicy = require('./superAdmin');
const doctorPolicy = require('./doctor');
const assistantPolicy = require('./assistant');
const customerPolicy = require('./customer');

const opts = {
  [SUPER_ADMIN]: {
    // list of allowed operations
    can: superAdminPolicy
  },
  [OPERATOR]: {
    // list of allowed operations
    can: doctorPolicy
  },
  [CUSTOMER]: {
    // list of allowed operations
    can: customerPolicy
  }
};

module.exports = opts;
