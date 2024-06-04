"use client";

import { SearchCategories } from "@/components/SearchCategories";
import { useShopFeedWithSuspense } from "@/use-search";

export const SearchCategoriesLoader = () => {
  const categories = useShopFeedWithSuspense();
  return <SearchCategories categories={categories} />;
};
