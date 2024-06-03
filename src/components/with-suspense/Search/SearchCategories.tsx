"use client";

import { useShopFeedWithSuspense } from "@/use-search";

export const SearchCategories = () => {
	const categories = useShopFeedWithSuspense();
	if (!categories.length) return <>No categories match</>;
	return categories.map((category) => (
		<a key={category.name} href={`#${category.name}`}>
			{category.name}
		</a>
	));
};