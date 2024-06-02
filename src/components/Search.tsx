import type { Category } from "../graphql/bin/graphql";
import { Input } from "./shadcn/input";

export const Search = ({ categories }: { categories: Category[] }) => (
	<div className="md:w-64 flex flex-1 md:max-w-64 md:min-w-64 flex-col p-4 w-full">
		<Input type="text" className="w-full" placeholder="Search" />
		<h4 className="text-2xl pt-2">Categories</h4>
		<div className="flex flex-col">
			{categories.map((category) => (
				<a key={category.name} href={`#${category.name}`}>
					{category.name}
				</a>
			))}
		</div>
	</div>
);
