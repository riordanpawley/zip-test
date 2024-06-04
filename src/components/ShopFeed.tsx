import type { Category } from "../graphql/bin/graphql";

import { ScrollArea, ScrollBar } from "@/components/shadcn/scroll-area";
import { MerchantCard } from "@/components/MerchantCard";
import type { Merchant } from "@/graphql/bin/graphql";
import { TypographyMuted } from "@/components/TypographyMuted";

const filterValidMerchants = (
  merchant: NonNullable<Merchant>,
): merchant is typeof merchant & { image: string; href: string } =>
  merchant.image !== null && merchant.href !== null;

export const ShopFeed = ({ categories }: { categories: Category[] }) => {
  if (!categories.length)
    return (
      <TypographyMuted className="p-2 px-4">No results match</TypographyMuted>
    );
  return categories.map((category) => (
    <div key={category.name} className="flex flex-col">
      <h4
        id={category.name}
        className="px-2 text-2xl font-semibold target:font-bold target:underline"
      >
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
