import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./schema";

import { type Context, resolvers } from "@/graphql/ApolloResolvers";

export const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers: resolvers,
  logger: console,
});
