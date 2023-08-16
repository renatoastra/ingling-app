"use client";

import { Navbar } from "@/components/Sidebar/Navbar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Navbar />
      <Sidebar />
      {children}
    </ThemeProvider>
  );
};
