import { PreloadQuery } from "@/graphql/ApolloClient";
import { ShopFeedLoader } from "@/components/without-suspense/ShopFeedLoader";
import { searchShopFeedDocument } from "@/graphql/documents";
import { Search } from "@/components/Search";
import { Separator } from "@/components/shadcn/separator";
import { SearchCategoriesLoader } from "@/components/without-suspense/SearchCategoriesLoader";
import { ShopFeedContainer } from "@/components/ShopFeedContainer";

export default async function ClientServerFetchingPage({
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
        <SearchCategoriesLoader />
      </Search>
      <Separator className="md:hidden" />
      <ShopFeedContainer>
        <ShopFeedLoader />
      </ShopFeedContainer>
    </PreloadQuery>
  );
}
