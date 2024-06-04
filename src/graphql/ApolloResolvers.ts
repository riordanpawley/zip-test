import { ShopFeedRepo } from "@/ShopFeedRepo";
import type { Category, Resolvers, ShopFeed } from "@/graphql/bin/graphql";
import { runPromiseWith } from "@/graphql/effect-runtime";
import { Effect, pipe, Array as A, Record } from "effect";
import { cons } from "effect/List";
import Fuse from "fuse.js";

export interface Context {
  dataSources: {
    shopFeed: ShopFeed[];
  };
}

export const searchShopFeed = (query?: null | string) =>
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
      Record.map(A.map(({ category, ...merchant }) => merchant)),
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
  });

export const resolvers = {
  Query: {
    searchShopFeed: (_, { query }) =>
      searchShopFeed(query).pipe(runPromiseWith("ApolloClient.searchShopFeed")),
  },
} satisfies Resolvers<Context>;
