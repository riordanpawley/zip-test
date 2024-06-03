import { PreloadQuery } from "@/graphql/ApolloClient";
import { ShopFeed } from "@/components/without-suspense/ShopFeed";
import { searchShopFeedDocument } from "@/graphql/documents";
import { Search } from "@/components/without-suspense/Search";
import { Separator } from "@/components/shadcn/separator";

export default async function ClientServerFetchingPage({
	searchParams: { search = "" },
}: { searchParams: { search?: string } }) {
	return (
		<PreloadQuery
			query={searchShopFeedDocument}
			variables={{
				query: search,
			}}
		>
			<Search />
			<Separator className="md:hidden" />
			<ShopFeed />
		</PreloadQuery>
	);
}
