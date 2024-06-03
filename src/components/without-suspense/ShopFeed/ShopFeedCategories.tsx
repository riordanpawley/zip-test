"use client";

import { ScrollArea, ScrollBar } from "@/components/shadcn/scroll-area";
import { MerchantCard } from "../../MerchantCard";
import type { Merchant } from "@/graphql/bin/graphql";
import { useShopFeedWithoutSuspense } from "@/use-search";

const filterValidMerchants = (
	merchant: NonNullable<Merchant>,
): merchant is typeof merchant & { image: string; href: string } =>
	merchant.image !== null && merchant.href !== null;

export const ShopFeedCategories = () => {
	const categories = useShopFeedWithoutSuspense();

	if (!categories) return <div className="p-2">Loading...</div>;
	if (!categories.length) return <div className="p-2">No Results</div>;
	return categories.map((category) => (
		<div key={category.name} className="flex flex-col">
			<h4 id={category.name} className="px-2 text-2xl">
				{category.name}
			</h4>
			<ScrollArea className="whitespace-nowrap rounded-md">
				<div className="flex flex-row gap-2 pb-2 px-2">
					{category.merchants.filter(filterValidMerchants).map((merchant) => (
						<MerchantCard {...merchant} key={merchant.id} />
					))}
				</div>
				<ScrollBar orientation="horizontal" className="px-2 pt-1" />
			</ScrollArea>
		</div>
	));
};
