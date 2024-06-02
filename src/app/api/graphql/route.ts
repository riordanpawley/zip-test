import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { NextRequest } from "next/server";
import { apolloServer } from "../../../graphql/ApolloServer";

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);

//	.then(console.log);
export { handler as GET, handler as POST };
