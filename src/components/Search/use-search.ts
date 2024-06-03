import { useSuspenseQuery } from "@apollo/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { searchShopFeedDocument } from "@/graphql/documents";
import { useState } from "react";

export const useSearch = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const value = searchParams.get("search") ?? "";
	const pathname = usePathname();
	const [valueInState, setValueInState] = useState(value);
	return {
		value,
		valueInState,
		setValue: (search: string) => {
			setValueInState(search);
			const _searchParams = new URLSearchParams(searchParams);
			_searchParams.set("search", search);
			router.replace(`${pathname}?${_searchParams.toString()}`);
		},
	};
};

export const useShopFeed = () => {
	const { value } = useSearch();
	console.log(value);
	const { data } = useSuspenseQuery(searchShopFeedDocument, {
		variables: { query: value },
		errorPolicy: "none",
		fetchPolicy: "no-cache",
	});
	return data.searchShopFeed.categories;
};
