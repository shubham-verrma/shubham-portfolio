import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Shubham Verma - Strategy + Zero-to-One',
  description: 'Founder-type operator. Built ₹2 Cr GMV from scratch. Creator-economy + GTM specialist.',
  keywords: ['product strategy', 'zero-to-one', 'creator economy', 'GTM', 'operations'],
  authors: [{ name: 'Shubham Verma' }],
  creator: 'Shubham Verma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubhamverma.dev',
    title: 'Shubham Verma - Strategy + Zero-to-One',
    description: 'Founder-type operator. Built ₹2 Cr GMV from scratch. Creator-economy + GTM specialist.',
    siteName: 'Shubham Verma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Verma - Strategy + Zero-to-One',
    description: 'Founder-type operator. Built ₹2 Cr GMV from scratch. Creator-economy + GTM specialist.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
