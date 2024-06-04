import { PreloadQuery } from "@/graphql/ApolloClient";
import { ShopFeedLoader } from "@/components/with-suspense/ShopFeedLoader";
import { searchShopFeedDocument } from "@/graphql/documents";
import { Search } from "@/components/Search";
import { Separator } from "@/components/shadcn/separator";
import { Suspense } from "react";
import { SearchCategoriesLoader } from "@/components/with-suspense/SearchCategoriesLoader";
import { ShopFeedContainer } from "@/components/ShopFeedContainer";
import { TypographyMuted } from "@/components/TypographyMuted";

export default async function WithSuspensePage({
  searchParams: { search = "" },
}: { searchParams: { search?: string } }) {
  return (
    <PreloadQuery
      query={searchShopFeedDocument}
      variables={{
        query: search,
      }}
    >
      <Search>
        <Suspense fallback={<TypographyMuted>Loading...</TypographyMuted>}>
          <SearchCategoriesLoader />
        </Suspense>
      </Search>
      <Separator className="md:hidden" />
      <ShopFeedContainer>
        <Suspense fallback={<TypographyMuted>Loading...</TypographyMuted>}>
          <ShopFeedLoader />
        </Suspense>
      </ShopFeedContainer>
    </PreloadQuery>
  );
}
