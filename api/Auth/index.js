require("dotenv").config();

const server = require("./src/app");

server.listen(server.get("port") || 3002, () =>
  console.log(`${server.serverName} listening on port ${server.get("port")}`)
);

module.exports = server;
