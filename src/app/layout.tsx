import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Providers } from "./providers";

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
        <Providers>
          <div className="pl-[150px]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
