const { Hono } = require("hono");
const middleware = require("../middleware");

const app = new Hono();

app.use(middleware.ensureAuthenticated());

app.get("/", (c) => {
  return c.text("respond with a resource");
});

module.exports = app;
