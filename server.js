const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

var fs = require("fs");

exports.handler = function (event, context) {
  fs.writeFile("/tmp/test.txt", "testing", function (err) {
    if (err) {
      context.fail("writeFile failed: " + err);
    } else {
      context.succeed("writeFile succeeded");
    }
  });
};
