import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
const OPTIONS = {
  port: 4000,
};
const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});
server.start(OPTIONS, () => console.log(`Listening on: ${OPTIONS.port}`));
