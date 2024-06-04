"use client";

import { SearchCategories } from "@/components/SearchCategories";
import { TypographyMuted } from "@/components/TypographyMuted";
import { useShopFeedWithoutSuspense } from "@/use-search";

export const SearchCategoriesLoader = () => {
  const categories = useShopFeedWithoutSuspense();
  if (!categories) return <TypographyMuted>Loading...</TypographyMuted>;
  return <SearchCategories categories={categories} />;
};
