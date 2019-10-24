const proxy = require('http-proxy-middleware');
let target = 'http://ymim-backend-staging.herokuapp.com'
if (process.env.NODE_ENV === 'development') {
  target = 'http://localhost:8000'
}
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};
