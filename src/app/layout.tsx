import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { SuspenseSelector } from "@/components/SuspenseSelector";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Riordan's Zip Hackerrank Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans min-h-screen bg-background antialiased",
          inter.variable,
        )}
      >
        <Providers>
          <div className="w-dvh py-2 px-8 bg-foreground">
            <div className="md:mx-auto md:max-w-6xl items-center flex flex-row justify-between">
              <Button asChild variant={"link"} className="text-secondary">
                <Link href="/">Home</Link>
              </Button>
              <SuspenseSelector />
            </div>
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
