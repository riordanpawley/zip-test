import { Effect } from "effect";
import { shopFeed } from "../fixtures/get-shop-feed";

export const db = {
	shopFeed: {
		get: () =>
			// you can change this delay to simulate a slow network
			Effect.succeed(shopFeed).pipe(Effect.delay(300), Effect.runPromise),
	},
};
