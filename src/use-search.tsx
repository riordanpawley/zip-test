"use client";

import { useQuery, useSuspenseQuery } from "@apollo/client";
import { searchShopFeedDocument } from "@/graphql/documents";
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useState,
  useContext,
} from "react";
import { useDebounceValue } from "usehooks-ts";

export const SearchContext = createContext<{
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}>({
  search: "",
  setSearch: () => {
    throw new Error("SearchProvider not found");
  },
});
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useShopFeedWithSuspense = () => {
  const { search } = useContext(SearchContext);
  const [debouncedSearch] = useDebounceValue(search, 300);
  const { data } = useSuspenseQuery(searchShopFeedDocument, {
    variables: { query: debouncedSearch },
    errorPolicy: "none",
  });

  return data.searchShopFeed.categories;
};

export const useShopFeedWithoutSuspense = () => {
  const { search } = useContext(SearchContext);
  const [debouncedSearch] = useDebounceValue(search, 300);
  const { data } = useQuery(searchShopFeedDocument, {
    variables: { query: debouncedSearch },
    errorPolicy: "none",
  });

  return data?.searchShopFeed.categories ?? null;
};
