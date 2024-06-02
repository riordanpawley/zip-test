import { NodeSdk } from "@effect/opentelemetry";
import {
	ConsoleSpanExporter,
	BatchSpanProcessor,
} from "@opentelemetry/sdk-trace-base";

export const OtelNodeSdkLive = NodeSdk.layer(() => ({
	resource: { serviceName: "next.js" },
	spanProcessor: new BatchSpanProcessor(new ConsoleSpanExporter()),
}));
