import { Effect, Context, Layer } from "effect";
import type { shopFeed } from "../fixtures/get-shop-feed";
import { db } from "./db";

export class ShopFeedRepo extends Context.Tag("ShopFeedRepo")<
	ShopFeedRepo,
	{ readonly getShopFeed: Effect.Effect<typeof shopFeed> }
>() {}

// if db was also behind a layer we could use Layer.effect to keep
// the layer from the repo method signatures.
// since the db is just a mock, we can use Layer.succeed
export const ShopFeedRepoLive = Layer.succeed(ShopFeedRepo, {
	getShopFeed: Effect.promise(() => db.shopFeed.get()).pipe(
		Effect.withSpan("ShopFeedRepo.getShopFeed"),
	),
});
