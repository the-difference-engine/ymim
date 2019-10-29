const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "http://ymim-backend-staging.herokuapp.com",
      changeOrigin: true
    })
  );
};
