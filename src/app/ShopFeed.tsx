"use client";
import { useSuspenseQuery } from "@apollo/client";

import { Search } from "../components/Search";
import { getShopFeedDocument } from "../graphql/documents";
import { ScrollArea, ScrollBar } from "../components/shadcn/scroll-area";
import { MerchantCard } from "../components/MerchantCard";
import type { Exact, GetShopFeedQuery, Merchant } from "../graphql/bin/graphql";

const filterValidMerchants = (
	merchant: NonNullable<Merchant>,
): merchant is typeof merchant & { image: string; href: string } =>
	merchant.image !== null && merchant.href !== null;

export const ShopFeed = () => {
	const { data } = useSuspenseQuery(getShopFeedDocument, {
		errorPolicy: "none",
	});
	const { categories } = data.getShopFeed;
	return (
		<>
			<Search categories={categories} />
			<div className="flex w-full flex-col gap-4 overflow-hidden">
				<h2 className="text-4xl p-4">Shop Feed</h2>
				<div className="flex w-full flex-col gap-4 overflow-hidden">
					{categories.map((category) => (
						<div key={category.name} className="flex flex-col overflow-hidden">
							<h4 id={category.name} className="px-2 text-2xl">
								{category.name}
							</h4>
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
		</>
	);
};
