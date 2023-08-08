"use client";

import "@/styles/globals.css";
import { GitHubLogoIcon, HomeIcon } from "@radix-ui/react-icons";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Inkling.app",
  description: "Inkling - Guess who",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "bg-background font-sans text-foreground",
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Sidebar />
          <div className="pl-[150px]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
