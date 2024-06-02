import { ImageCard } from "./ImageCard";

export const MerchantCard = ({
	title,
	image,
	href,
}: { title: string; image: string; href: string }) => (
	<a href={href} target="_blank" rel="noreferrer">
		<ImageCard
			heading={title}
			src={image}
			alt={`Merchant logo for ${title}`}
			width={256}
			className="w-[256px]"
			aspectRatio="square"
			height={256}
		/>
	</a>
);
