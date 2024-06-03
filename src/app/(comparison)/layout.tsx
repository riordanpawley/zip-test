export default async function FetchingExamplesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className="flex space-y-4 flex-col max-w-6xl md:mx-auto relative md:h-screen">
			<div className="flex flex-col md:flex-row gap-2 items-start relative md:px-4">
				{children}
			</div>
		</main>
	);
}
