export const ShopFeedContainer = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden">
      <h2 className="text-4xl py-4 px-2 font-bold">Shop Feed</h2>
      <div className="flex w-full flex-col gap-4 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
