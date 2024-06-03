import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextRequest } from "next/server";
import { apolloServer, type Context } from "@/graphql/ApolloServer";

// export const dynamic = "force-dynamic";

const handler = startServerAndCreateNextHandler<NextRequest, Context>(
	apolloServer,
);

//	.then(console.log);
export { handler as GET, handler as POST };
