import { ShopFeedRepo, ShopFeedRepoLive } from "@/ShopFeedRepo";
import { searchShopFeed } from "@/graphql/ApolloResolvers";
import type { ShopFeed } from "@/graphql/bin/graphql";
import { Effect, Layer, Struct } from "effect";
import { cons } from "effect/List";
import { expect, it, describe } from "vitest";

describe("ShopFeedRepo", () => {
  it("should return a shop feed", () =>
    Effect.gen(function* () {
      const { get } = yield* ShopFeedRepo;
      const shopFeed = yield* get;

      expect(shopFeed.categories.length).toBeGreaterThan(0);
    }).pipe(Effect.provide(ShopFeedRepoLive), Effect.runPromise));
});

describe("ApolloResolvers", () => {
  const mockMerchant1 = { id: "1", title: "Merchant Foo" };
  const mockMerchant2 = { id: "2", title: "Merchant Bar" };
  const mockFooCategory = {
    name: "Foo Category",
    merchants: [mockMerchant1, mockMerchant2],
  };
  const mockShopFeed: ShopFeed = {
    name: "Shop Feed",
    categories: [
      {
        name: "Cat 1",
        merchants: [mockMerchant1, mockMerchant2],
      },
      mockFooCategory,
    ],
  };

  const layer = Layer.succeed(ShopFeedRepo, {
    get: Effect.sync(() => mockShopFeed),
  });
  describe("searchShopFeed", () => {
    it("should return a shop feed with no filtering if there is no search query", () =>
      Effect.gen(function* () {
        const shopFeed = yield* searchShopFeed(null);

        expect(shopFeed).toEqual(mockShopFeed);
      }).pipe(Effect.provide(layer), Effect.runPromise));

    it("should return a shop feed with category filtering if there is a search query", () =>
      Effect.gen(function* () {
        const shopFeed = yield* searchShopFeed("Foo");
        const merchants = shopFeed.categories[0].merchants;
        expect(merchants).toEqual([mockMerchant1]);
      }).pipe(Effect.provide(layer), Effect.runPromise));

    it("should return a shop feed with  filtering if there is a search query", () =>
      Effect.gen(function* () {
        const shopFeed = yield* searchShopFeed("Foo");
        const merchants = shopFeed.categories[0].merchants;
        // should return only the merchants that match the search query from this category
        expect(merchants).toEqual([mockMerchant1]);
        // should return all the merchants from this category as the category name matches the search query
        expect(shopFeed.categories[1]).toEqual(mockFooCategory);
      }).pipe(Effect.provide(layer), Effect.runPromise));
  });
});
