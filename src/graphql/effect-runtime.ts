import { Effect, Layer, Runtime, Scope } from "effect";
import { ShopFeedRepoLive } from "../ShopFeedRepo";
import { OtelNodeSdkLive } from "../OtelNodeSdk";

const scope = Effect.runSync(Scope.make());

const layer = Layer.mergeAll(ShopFeedRepoLive, OtelNodeSdkLive);
Layer.mergeAll(ShopFeedRepoLive, OtelNodeSdkLive);

const runtime = Effect.runSync(
	Layer.toRuntime(layer).pipe(Scope.extend(scope)),
);

export const runPromiseWith =
	(spanTag: string) =>
	<A, E>(effect: Effect.Effect<A, E, Layer.Layer.Success<typeof layer>>) =>
		effect.pipe(
			Effect.tapDefect(Effect.logError),
			Effect.tapError(Effect.logError),
			Effect.withSpan(spanTag),
			Runtime.runPromise(runtime),
		);
