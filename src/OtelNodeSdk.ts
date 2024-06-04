import { DevTools } from "@effect/experimental";
import * as NodeSdk from "@effect/opentelemetry/NodeSdk";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { Config, Effect, Layer, Option, pipe } from "effect";

export const makeOtelLayer = (serviceName: string) =>
  Effect.gen(function* () {
    const ConfigEffect = pipe(
      Config.string("OTLP_TRACE_EXPORTER_URL"),
      Config.option,
      Effect.map(Option.getOrUndefined),
      Effect.map((url) => ({
        resource: { serviceName },
        spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter({ url })),
      })),
    );
    const OtelNodeLive = NodeSdk.layer(ConfigEffect);

    const NODE_ENV = yield* Config.string("NODE_ENV").pipe(
      Config.withDefault("development"),
    );
    yield* Effect.log(`NODE_ENV: ${NODE_ENV}`);
    if (NODE_ENV === "development") {
      return DevTools.layer().pipe(Layer.provideMerge(OtelNodeLive));
    }
    return OtelNodeLive;
  }).pipe(Layer.unwrapEffect);
