import { ImageCard } from "./ImageCard";
import Image from "next/image";

export const MerchantCard = ({
  title,
  image,
  href,
  logo,
}: { title: string; image: string; href: string; logo?: string | null }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="relative"
    data-testid="merchant-card"
  >
    <ImageCard
      heading={title}
      src={image}
      alt={`Merchant logo for ${title}`}
      width={256}
      className="w-[256px]"
      aspectRatio="square"
      height={256}
    />

    {logo ? (
      <div className="absolute top-2 left-2 w-16 h-16 bg-black/30 rounded-lg">
        <Image
          src={logo}
          alt={`Logo for ${title}`}
          fill
          className="object-contain"
        />
      </div>
    ) : null}
  </a>
);
