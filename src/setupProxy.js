const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/data',
    createProxyMiddleware({
      target: `http://localhost:${ process.env || 3001}`,
      changeOrigin: true,
    })
  );
};