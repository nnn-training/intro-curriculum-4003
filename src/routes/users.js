const { Hono } = require("hono");
const { ensureAuthenticated } = require('../middlewares');

const app = new Hono();

console.log(ensureAuthenticated);

app.use(ensureAuthenticated());

app.get("/", (c) => {
  return c.text("respond with a resource");
});

module.exports = app;
