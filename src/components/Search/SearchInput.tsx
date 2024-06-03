"use client";

import { Input } from "@/components/shadcn/input";
import { useSearch } from "./use-search";

export const SearchInput = () => {
	const { valueInState, setValue } = useSearch();
	return (
		<Input
			type="text"
			className="w-full"
			placeholder="Search"
			value={valueInState}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
};
