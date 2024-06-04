"use client";

import { useShopFeedWithSuspense } from "@/use-search";
import { ShopFeed } from "@/components/ShopFeed";

export const ShopFeedLoader = () => {
  const categories = useShopFeedWithSuspense();

  return <ShopFeed categories={categories} />;
};
