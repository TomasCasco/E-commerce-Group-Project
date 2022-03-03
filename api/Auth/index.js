require("dotenv").config();

const server = require("./src/app");

server.listen(server.get("port"), () =>
  console.log(`${server.serverName} listening on port ${server.get("port")}`)
);

module.exports = server;
