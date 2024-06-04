import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextRequest } from "next/server";
import { apolloServer } from "@/graphql/ApolloServer";
import type { Context } from "@/graphql/ApolloResolvers";

// export const dynamic = "force-dynamic";

const handler = startServerAndCreateNextHandler<NextRequest, Context>(
  apolloServer,
);

export { handler as GET, handler as POST };
