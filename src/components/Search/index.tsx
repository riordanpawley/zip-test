import { Suspense } from "react";
import { SearchCategories } from "./SearchCategories";
import { SearchInput } from "./SearchInput";

export const Search = () => (
	<div className="md:w-64 flex flex-1 md:max-w-64 md:min-w-64 flex-col p-4 w-full md:sticky md:top-0 md:left-0 md:h-min">
		<SearchInput />
		<h4 className="text-2xl pt-2">Categories</h4>
		<div className="flex flex-col">
			<Suspense fallback={<>loading...</>}>
				<SearchCategories />
			</Suspense>
		</div>
	</div>
);
