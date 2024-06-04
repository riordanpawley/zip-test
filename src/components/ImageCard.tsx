import Image from "next/image";

import { cn } from "@/lib/utils";

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  aspectRatio?: "portrait" | "square";
  width?: number;
  alt: string;
  height?: number;
  heading: string;
  subheading?: string;
}

export function ImageCard({
  aspectRatio = "portrait",
  src,
  heading,
  subheading,
  alt,
  width,
  height,
  className,
  ...props
}: ImageCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
          )}
        />
      </div>

      <div className="space-y-1 text-sm overflow-hidden">
        <h3 className="font-medium leading-none text-ellipsis overflow-hidden">
          {heading}
        </h3>
        {subheading ? (
          <p className="text-xs text-muted-foreground text-ellipsis overflow-hidden">
            {subheading}
          </p>
        ) : null}
      </div>
    </div>
  );
}
