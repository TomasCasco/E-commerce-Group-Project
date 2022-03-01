require("dotenv").config();
const server = require("./src/app");
const { conn } = require("./src/db");

conn.sync({ force: true }).then(() => {
  server.listen(server.get("port"), () =>
    console.log(`${server.serverName} listening on port ${server.get("port")}`)
  );
});

module.exports = server;
