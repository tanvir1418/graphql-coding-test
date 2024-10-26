import * as dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import context from "./context/context.js";

// types
import { typeDefs } from "./schemas/schemas.js";

// resolvers
import { resolvers } from "./resolvers/resolvers.js";

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  includeStacktraceInErrorResponses: false,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5500 },
  context: context,
});

console.log(`Server ready at ${url}`);
