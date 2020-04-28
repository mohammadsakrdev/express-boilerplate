const config = require('../config/config');
const healthCheck = require('../middleware/healthCheck');
const notFoundHandler = require('../middleware/notFoundHandler');
const errorHandler = require('../middleware/errorHandler');
const initSocket = require('../../modules/socket');
// Route files
const authRoutes = require('../../modules/auth/auth.routes');

/**
 * @function
 * Registers all app routes
 *
 * @param {object} app - Express app.
 * @param {object} server - Http server.
 */
module.exports = (app, server) => {
  const io = initSocket(server);
  app.use((req, res, next) => {
    res.io = io;
    next();
  });
  // Mount routers
  // eslint-disable-next-line no-unused-vars
  app.get(`${config.baseUrl}/health`, healthCheck);
  app.use(`${config.baseUrl}/auth`, authRoutes);

  // Handling Not Found
  app.use(notFoundHandler);

  // Central error handler
  app.use(errorHandler);
};
