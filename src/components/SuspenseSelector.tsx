"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./shadcn/button";
import { cn } from "../lib/utils";

export const SuspenseSelector = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-row gap-2">
      <Button
        asChild
        disabled={pathname.includes("with-suspense")}
        variant={"link"}
        className={cn("text-secondary", {
          "cursor-default underline": pathname.includes("with-suspense"),
        })}
      >
        <Link href="/with-suspense">With Suspense</Link>
      </Button>
      <Button
        asChild
        variant={"link"}
        className={cn("text-secondary", {
          "cursor-default underline": pathname.includes("without-suspense"),
        })}
      >
        <Link href="/without-suspense">Without Suspense</Link>
      </Button>
    </div>
  );
};
