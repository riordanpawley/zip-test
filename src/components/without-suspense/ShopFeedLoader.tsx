"use client";

import { ShopFeed } from "@/components/ShopFeed";
import { TypographyMuted } from "@/components/TypographyMuted";
import { useShopFeedWithoutSuspense } from "@/use-search";

export const ShopFeedLoader = () => {
  const categories = useShopFeedWithoutSuspense();

  if (!categories) return <TypographyMuted>Loading...</TypographyMuted>;
  return <ShopFeed categories={categories} />;
};
