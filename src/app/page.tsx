import { PreloadQuery } from "@/graphql/ApolloClient";
import { ShopFeed } from "@/components/ShopFeed";
import { searchShopFeedDocument } from "@/graphql/documents";
import { Search } from "@/components/Search";
import { Separator } from "@/components/shadcn/separator";

export default async function Home({
	searchParams: { search = "" },
}: { searchParams: { search?: string } }) {
	return (
		<main className="flex space-y-4 flex-col max-w-6xl md:mx-auto overflow-hidden relative md:h-screen">
			<div className="flex flex-col md:flex-row gap-2 items-start md:overflow-y-scroll relative md:px-4">
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
			</div>
		</main>
	);
}
