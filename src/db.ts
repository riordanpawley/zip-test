import { Effect } from "effect";
import { shopFeed } from "../fixtures/get-shop-feed";

export const db = {
	shopFeed: {
		get: () =>
			Effect.succeed(shopFeed).pipe(Effect.delay(100), Effect.runPromise),
	},
};
