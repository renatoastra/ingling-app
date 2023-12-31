/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Providers } from "./providers";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { type ReactNode } from "react";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    //@ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
    description: "Inkling - Guess who",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body
        className={twMerge(
          "bg-background font-sans text-foreground",
          inter.variable
        )}
      >
        {/* // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="md:ml-[150px]">{children}</div>
          </Providers>
        </NextIntlClientProvider>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-P1P36WTC5Q" />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-P1P36WTC5Q');`,
        }}
      />
    </html>
  );
}
