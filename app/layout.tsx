

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingMenu from "@/components/reactbits/FloatingMenu";
import SmoothScroll from "@/components/SmoothScroll";
import { DeviceProvider } from "@/lib/context/DeviceContext";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thewebstory.id'),
  title: {
    default: "thewebstory.id — Premium Web Design for Modern Brands",
    template: "%s | thewebstory.id"
  },
  description: "Crafting premium, high-conversion websites for Indonesian brands. Specializing in motion UI, modern design, and high-performance Next.js development since 2026.",
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: 'https://thewebstory.id',
    siteName: 'thewebstory.id',
    title: 'thewebstory.id — Premium Web Design for Modern Brands',
    description: 'Crafting premium, high-conversion websites for Indonesian brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thewebstory.id — Premium Web Design for Modern Brands',
    description: 'Crafting premium, high-conversion websites for Indonesian brands.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative w-full overflow-x-hidden h-full overflow-y-auto ">
        <DeviceProvider>
          <SmoothScroll>
            <Navbar />
            <FloatingMenu />
            {children}
          </SmoothScroll>
        </DeviceProvider>
      </body>
    </html>
  );
}
