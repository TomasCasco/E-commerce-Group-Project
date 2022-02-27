const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./grapgql/typeDefs");
const { resolvers } = require("./grapgql/resolvers");
const morgan = require("morgan");
const routes = require("./routes/index.route");

const app = express();
require("./database");

// settings
app.set("port", process.env.PORT || 3001);

// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

module.exports = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => res.status(404).send("invalid url"));

  app.listen(app.get("port"), () => {
    console.log(`server listening on port ${app.get("port")}`);
  });
};
