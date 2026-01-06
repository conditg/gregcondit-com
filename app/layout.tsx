import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    default: 'Greg Condit',
    template: '%s | Greg Condit',
  },
  description: 'AI strategy advisor helping companies navigate what to build, buy, or ignore—and connecting them with the right implementation partners.',
  openGraph: {
    title: 'Greg Condit',
    description: 'AI strategy advisor helping companies navigate what to build, buy, or ignore—and connecting them with the right implementation partners.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body className="flex flex-col min-h-screen font-serif">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
