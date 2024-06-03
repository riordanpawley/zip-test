"use client";

import { useShopFeed } from "./use-search";

export const SearchCategories = () => {
	const categories = useShopFeed();

	return categories.map((category) => (
		<a key={category.name} href={`#${category.name}`}>
			{category.name}
		</a>
	));
};
