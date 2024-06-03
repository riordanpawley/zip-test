"use client";

import { useShopFeedWithoutSuspense } from "@/use-search";

export const SearchCategories = () => {
	const categories = useShopFeedWithoutSuspense();
	if (!categories) return <>Loading...</>;
	if (!categories.length) return <>No categories match</>;
	return categories.map((category) => (
		<a key={category.name} href={`#${category.name}`}>
			{category.name}
		</a>
	));
};
