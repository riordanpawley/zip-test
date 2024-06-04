import { TypographyMuted } from "@/components/TypographyMuted";
import type { Category } from "@/graphql/bin/graphql";

export const SearchCategories = ({
  categories,
}: { categories: Category[] }) => {
  if (!categories.length)
    return (
      <TypographyMuted className="p-2">No categories match</TypographyMuted>
    );
  return categories.map((category) => (
    <a key={category.name} href={`#${category.name}`}>
      {category.name}
    </a>
  ));
};
