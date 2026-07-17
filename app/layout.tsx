import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Watchex | Cinematic Luxury',
  description: 'Award-winning luxury watches with unparalleled craftsmanship.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#C5A059] selection:text-black">{children}</body>
    </html>
  );
}
