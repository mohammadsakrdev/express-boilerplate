module.exports = {
  CustomerRegisterRequest: {
    title: 'CustomerRegisterRequest',
    required: ['fullName', 'phoneNumber', 'userName', 'email', 'password'],
    type: 'object',
    properties: {
      fullName: {
        type: 'string'
      },
      phoneNumber: {
        type: 'string'
      },
      userName: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    example: {
      fullName: 'test1',
      phoneNumber: '0102839381',
      userName: 'test1',
      email: 'TEST@yahoo.com',
      password: '123456'
    }
  },
  LoginRequest: {
    title: 'LoginRequest',
    required: ['userName', 'password'],
    type: 'object',
    properties: {
      userName: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    example: {
      userName: 'test',
      password: '123456'
    }
  }
};
