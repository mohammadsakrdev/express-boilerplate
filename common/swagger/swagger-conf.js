module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Boilerplate',
    description: 'Boilerplate backend APIs documentation',
    termsOfService: 'http://Boilerplate.com/terms/',
    contact: {
      name: 'API Support',
      url: 'http://www.Boilerplate.com/support',
      email: 'support@Boilerplate.com'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    },
    version: '1.0'
  },
  servers: [
    {
      url: '{protocol}://localhost:3000/api/v0',
      description: 'Localhost server (uses test data)',
      variables: {
        protocol: {
          enum: ['http'],
          default: 'http'
        }
      }
    },
    {
      url: '{protocol}://Boilerplate.example.com/api/v0',
      description: 'For production to be added',
      variables: {
        protocol: {
          enum: ['http', 'https'],
          default: 'https'
        }
      }
    }
  ],
  tags: [
    {
      name: 'Auth'
    }
  ]
};
