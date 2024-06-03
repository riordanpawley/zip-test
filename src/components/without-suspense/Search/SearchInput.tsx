"use client";

import { Input } from "@/components/shadcn/input";
import { SearchContext } from "@/use-search";
import { useContext } from "react";

export const SearchInput = () => {
	const { search, setSearch } = useContext(SearchContext);
	return (
		<Input
			type="text"
			className="w-full"
			placeholder="Search"
			value={search}
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
};
