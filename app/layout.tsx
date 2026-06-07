import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  subsets: ["latin"],
  weight:"400"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imambuilds.vercel.app'),
  title: {
    default: 'Imam Ahmed',
    template: '%s | Imam Ahmed',
  },
  description:
    'Imam Ahmed is a software engineer building modern web and mobile applications using Next.js, TypeScript, React Native, and Node.',
  authors: [{ name: 'Imam Ahmed', url: 'https://imambuilds.vercel.app' }],
  openGraph: {
    title: 'Imam Ahmed — Software Engineer',
    description:
      'Portfolio of Imam Ahmed — building modern web and mobile applications using Next.js, TypeScript, React Native, and Node.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Imam Ahmed Portfolio',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Imam Ahmed portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imam Ahmed — Software Engineer',
    description:
      'Portfolio of Imam Ahmed — building modern web and mobile applications using Next.js, TypeScript, React Native, and Node.',
    images: ['/hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${changaOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">{children}</body>
    </html>
  );
}
