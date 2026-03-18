import type { Metadata, Viewport } from "next";
import { Rajdhani, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "New Gayatri Earthmovers | Earthmoving Spare Parts Dealer",
  description:
    "Genuine & aftermarket spare parts for JCB, CAT, Komatsu, Hitachi, Volvo, L&T Case & BEML. Call +91 9430192911.",
  keywords:
    "JCB parts, earthmoving spare parts, CAT parts, Komatsu parts, excavator parts dealer, Ghaziabad",
  openGraph: {
    title: "New Gayatri Earthmovers",
    description: "India's trusted earthmoving spare parts dealer",
    locale: "en_IN",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          dmSans.variable,
          rajdhani.variable,
          notoSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
