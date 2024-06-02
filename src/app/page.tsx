import { requests } from "../../fixtures/get-shop-feed";

import { MerchantCard } from "../components/MerchantCard";
import { Input } from "../components/shadcn/input";
import { ScrollArea, ScrollBar } from "../components/shadcn/scroll-area";

// todo: replace this with bff loader
const categories =
	requests[0]?.responsePayload.data.shopFeedPaginated.shopFeed.categories;
if (categories === undefined) {
	throw new Error("No categories found");
}

const filterValidMerchants = (
	merchant: NonNullable<(typeof categories)[0]["merchants"][0]>,
): merchant is typeof merchant & { image: string; href: string } =>
	merchant.image !== null && merchant.href !== null;

export default function Home() {
	return (
		<main className="flex space-y-4 flex-col max-w-6xl md:mx-auto overflow-hidden">
			<div className="flex flex-col md:flex-row gap-2 items-start">
				<div className="md:w-64 flex flex-1 md:max-w-64 md:min-w-64 flex-col p-4 w-full">
					<Input type="text" className="w-full" placeholder="Search" />
					<h4 className="text-2xl pt-2">Categories</h4>
					<div className="flex flex-col">
						{categories.map((category) => (
							<div key={category.name} className="">
								{category.name}
							</div>
						))}
					</div>
				</div>
				<div className="flex w-full flex-col gap-4 overflow-hidden">
					<h2 className="text-4xl pt-4">Shop Feed</h2>
					<div className="flex w-full flex-col gap-4 overflow-hidden">
						{categories.map((category) => (
							<div
								key={category.name}
								className="flex flex-col overflow-hidden"
							>
								<h4 className="px-2 text-2xl">{category.name}</h4>
								<ScrollArea className="whitespace-nowrap rounded-md">
									<div className="flex flex-row gap-2 pb-2 px-2">
										{category.merchants
											.filter(filterValidMerchants)
											.map((merchant) => (
												<MerchantCard {...merchant} key={merchant.id} />
											))}
									</div>
									<ScrollBar orientation="horizontal" className="px-2 pt-1" />
								</ScrollArea>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
