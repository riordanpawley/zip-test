import { ApolloServer } from "@apollo/server";
import { shopFeed } from "../../fixtures/get-shop-feed";
import { typeDefs } from "./schema";

export const apolloServer = new ApolloServer({
	typeDefs,
	resolvers: {
		Query: {
			getShopFeed: () => shopFeed,
		},
	},
});
