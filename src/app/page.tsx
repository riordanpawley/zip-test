import { Suspense } from "react";
import { requests } from "../../fixtures/get-shop-feed";

import { MerchantCard } from "../components/MerchantCard";
import { Search } from "../components/Search";
import { Input } from "../components/shadcn/input";
import { ScrollArea, ScrollBar } from "../components/shadcn/scroll-area";
import { PreloadQuery, query } from "../graphql/ApolloClient";
import { gql } from "../graphql/bin/gql";
import type { Merchant } from "../graphql/bin/graphql";
import { ShopFeed } from "./ShopFeed";

const getShopFeedDocument = gql(`
  query getShopFeed {
    getShopFeed {
      categories {
				name
				merchants {
					id
					title
					image
					href
				}
			}
    }
  }
`);

// todo: replace this with bff loader
// const categories =
// 	requests[0]?.responsePayload.data.shopFeedPaginated.shopFeed.categories;
// if (categories === undefined) {
// 	throw new Error("No categories found");
// }

export default async function Home() {
	// const {
	// 	data: {
	// 		getShopFeed: { categories },
	// 	},
	// } = await query({ query: getShopFeedDocument });
	return (
		<main className="flex space-y-4 flex-col max-w-6xl md:mx-auto overflow-hidden md:px-4">
			<div className="flex flex-col md:flex-row gap-2 items-start">
				<PreloadQuery
					query={getShopFeedDocument}
					// variables={{
					//   foo: 1,
					// }}
				>
					<Suspense fallback={<>loading...</>}>
						<ShopFeed />
						{/* <div className="flex w-full flex-col gap-4 overflow-hidden">
				<h2 className="text-4xl p-4">Shop Feed</h2>
				<div className="flex w-full flex-col gap-4 overflow-hidden"> */}
					</Suspense>
				</PreloadQuery>
			</div>
		</main>
	);
}
