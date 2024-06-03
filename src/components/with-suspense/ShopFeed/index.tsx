import { Suspense } from "react";
import { ShopFeedCategories } from "./ShopFeedCategories";

export const ShopFeed = () => {
	return (
		<div className="flex w-full flex-col gap-4 overflow-hidden">
			<h2 className="text-4xl py-4 px-2">Shop Feed</h2>
			<div className="flex w-full flex-col gap-4 overflow-hidden">
				<Suspense fallback={<>loading...</>}>
					<ShopFeedCategories />
				</Suspense>
			</div>
		</div>
	);
};
