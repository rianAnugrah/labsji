import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/navbar";
import { cn } from "./utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex h-screen w-full flex-col",inter.className  ) }>
          <Navbar />
        <div className="w-full h-[calc(100svh_-_48px)] overflow-scroll ">


        {children}
        </div>
        
        </body>
    </html>
  );
}
