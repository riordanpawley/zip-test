import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./schema";
import type { Category, Resolvers, ShopFeed } from "./bin/graphql";
import { ShopFeedRepo } from "../ShopFeedRepo";

import { runPromiseWith } from "./effect-runtime";
import { Effect, Array as A, pipe } from "effect";
import Fuse from "fuse.js";

export interface Context {
	dataSources: {
		shopFeed: ShopFeed[];
	};
}
export const apolloServer = new ApolloServer<Context>({
	typeDefs,
	resolvers: {
		Query: {
			searchShopFeed: (_, { query }) =>
				Effect.gen(function* () {
					const { get: getShopFeed } = yield* ShopFeedRepo;
					const shopFeed = yield* getShopFeed;
					if (!query) {
						return shopFeed;
					}

					// flatten merchants so we can search em
					const flatMerchants = shopFeed.categories.flatMap((category) =>
						category.merchants.map((merchant) => ({
							...merchant,
							category: category.name,
						})),
					);

					const fuse = new Fuse(flatMerchants, {
						keys: ["title", "category"],
						threshold: 0.3,
					});

					// search merchants and categories by name
					const filteredMerchants = fuse.search(query).map(({ item }) => item);

					// group them back into their arrays
					const merchantsGroupedByCategory = pipe(
						filteredMerchants,
						A.groupBy((merchant) => merchant.category),
					);

					const categories = shopFeed.categories
						.map(
							(category): Category => ({
								...category,
								merchants: merchantsGroupedByCategory[category.name] ?? [],
							}),
						)
						.filter((category) => category.merchants.length > 0);

					return {
						...shopFeed,
						categories,
					} satisfies ShopFeed;
				}).pipe(runPromiseWith("ApolloClient.searchShopFeed")),
		},
	} satisfies Resolvers<Context>,
	logger: console,
});
