import { SearchInput } from "@/components/SearchInput";

export const Search = ({ children }: { children: React.ReactNode }) => (
  <div className="md:w-64 flex flex-1 md:max-w-64 md:min-w-64 flex-col p-4 w-full md:sticky md:top-0 md:left-0 md:h-min">
    <SearchInput />
    <h5 className="text-xl pt-2 font-semibold">Go To</h5>
    <div className="flex flex-col">{children}</div>
  </div>
);
