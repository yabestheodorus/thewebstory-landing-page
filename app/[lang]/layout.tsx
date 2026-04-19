import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import FloatingMenu from "@/components/reactbits/FloatingMenu";
import SmoothScroll from "@/components/SmoothScroll";
import { DeviceProvider } from "@/lib/context/DeviceContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary } from "@/lib/get-dictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    metadataBase: new URL('https://thewebstory.id'),
    title: {
      default: lang === 'id' ? "thewebstory.id — Desain Web Premium untuk Brand Modern" : "thewebstory.id — Premium Web Design for Modern Brands",
      template: "%s | thewebstory.id"
    },
    description: lang === 'id' 
      ? "Membangun website premium dengan konversi tinggi untuk brand Indonesia. Spesialisasi motion UI, desain modern, dan Next.js berkinerja tinggi." 
      : "Crafting premium, high-conversion websites for Indonesian brands. Specializing in motion UI, modern design, and high-performance Next.js development since 2026.",
    openGraph: {
      type: 'website',
      locale: lang === 'id' ? 'id_ID' : 'en_US',
      url: 'https://thewebstory.id',
      siteName: 'thewebstory.id',
      title: 'thewebstory.id — Premium Web Design for Modern Brands',
      description: 'Crafting premium, high-conversion websites for Indonesian brands.',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={` ${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative w-full overflow-x-hidden h-full overflow-y-auto ">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <DeviceProvider>
            <SmoothScroll>
              <Navbar lang={lang} dict={dict} />
              <FloatingMenu lang={lang} dict={dict} />
              {children}
            </SmoothScroll>
          </DeviceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
