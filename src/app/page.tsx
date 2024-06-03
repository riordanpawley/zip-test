import { Button } from "../components/shadcn/button";
import Link from "next/link";

export default async function Home() {
	return (
		<main className="flex space-y-4 flex-col max-w-6xl md:mx-auto overflow-hidden relative md:h-screen">
			<div className="flex flex-col md:flex-row gap-2 items-start md:overflow-y-scroll relative md:px-4">
				<Button asChild>
					<Link href="/with-suspense">With Suspense</Link>
				</Button>
				<Button asChild>
					<Link href="/without-suspense">Without Suspense</Link>
				</Button>
			</div>
		</main>
	);
}
