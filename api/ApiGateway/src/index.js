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
  context: async ({ req }) => {
    const token = req.headers.authorization;
    if (!token) return { UserAcess: null };
    const response = await axios.post(`${serverUrls.users}/verifyToken`, null, {
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) return response.data;
    else throw new ApolloError();
  },
  dataSources: () => ({
    UsersApi: new Apis.UsersApi(),
    ProductsApi: new Apis.ProductsApi(),
  }),
  introspection: true,
  playground: true,
});

server
  .listen(PORT)
  .then(({ url }) => console.log(`Server listening on ${url}`));
