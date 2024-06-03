"use client";

import { Input } from "@/components/shadcn/input";
import { SearchContext } from "@/use-search";
import { useContext } from "react";

export const SearchInput = () => {
	const { search: value, setSearch: setValue } = useContext(SearchContext);
	return (
		<Input
			type="text"
			className="w-full"
			placeholder="Search"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};
