const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const { resolvers } = require("./resolvers");
const { permissions } = require("./permissions");

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

//option start server
const options = {
  port: 4000,
  endpoint: '/graphql',               //Endpoint
  subscriptions: '/subscriptions',    
  playground: '/playground',          //admin only
}

//server listen
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
