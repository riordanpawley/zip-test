import { Effect, Context, Layer } from "effect";
import type { ShopFeed } from "./graphql/bin/graphql";
import { hardcodedShopFeed } from "@/hardcoded-shop-feed";

export class ShopFeedRepo extends Context.Tag("ShopFeedRepo")<
  ShopFeedRepo,
  { readonly get: Effect.Effect<ShopFeed> }
>() {}

// if db was also behind a layer we could use Layer.effect to keep
// the layer from the repo method signatures.
// since the db is just a mock, we can use Layer.succeed
export const ShopFeedRepoLive = Layer.succeed(ShopFeedRepo, {
  get: Effect.succeed(hardcodedShopFeed).pipe(
    Effect.withSpan("db.getShopFeed"),
  ),
});
