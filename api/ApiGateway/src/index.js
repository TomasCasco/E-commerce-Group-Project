require("dotenv").config();
const { ApolloServer, ApolloError } = require("apollo-server");
const axios = require("axios");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const serverUrls = require("./serverUrls");
const Apis = require("./dataSources");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req.headers.authorization) return { token: req.headers.authorization };
  },
  dataSources: () => ({
    UsersApi: new Apis.UsersApi(),
    ProductsApi: new Apis.ProductsApi(),
    EmailsApi: new Apis.EmailsApi(),
  }),
  introspection: true,
  playground: true,
});

server
  .listen(PORT)
  .then(({ url }) => console.log(`Server listening on ${url}`));
