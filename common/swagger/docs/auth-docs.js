module.exports = {
  'auth/register': {
    post: {
      tags: ['Auth'],
      summary: 'Customer Register',
      operationId: 'CustomerRegister',
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CustomerRegisterRequest'
            },
            example: {
              fullName: 'test1',
              phoneNumber: '0102839381',
              userName: 'test1',
              email: 'TEST@yahoo.com',
              password: '123456'
            }
          }
        },
        required: true,
        'x-send-file-in-body': false
      },
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login',
      operationId: 'Login',
      parameters: [],
      requestBody: {
        description: '',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LoginRequest'
            },
            example: {
              userName: 'test',
              password: '123456'
            }
          }
        },
        required: true,
        'x-send-file-in-body': false
      },
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/google': {
    get: {
      tags: ['Auth'],
      summary: 'Google login',
      operationId: 'Googlelogin',
      parameters: [],
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/google/callback': {
    get: {
      tags: ['Auth'],
      summary: 'Google callback',
      operationId: 'Googlecallback',
      parameters: [],
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/facebook': {
    get: {
      tags: ['Auth'],
      summary: 'Facebook login',
      operationId: 'Facebooklogin',
      parameters: [],
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/facebook/callback': {
    get: {
      tags: ['Auth'],
      summary: 'Facebook callback',
      operationId: 'Facebookcallback',
      parameters: [],
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/linkedin': {
    get: {
      tags: ['Auth'],
      summary: 'Linkedin login',
      operationId: 'Linkedinlogin',
      parameters: [],
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  },
  'auth/linkedin/callback': {
    get: {
      tags: ['Auth'],
      summary: 'Linkedin login1',
      operationId: 'Linkedinlogin1',
      parameters: [],
      responses: {
        '200': {
          description: '',
          headers: {}
        }
      },
      deprecated: false
    }
  }
};
