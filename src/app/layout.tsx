import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Classic Realty Indore — Premium Commercial Real Estate in Indore',
  description:
    'Classic Realty Indore — Your trusted partner for commercial real estate in Indore. Office spaces, showrooms, warehouses & commercial properties for rent and sale.',
  keywords: 'commercial real estate Indore, office space Indore, showroom rent Indore, warehouse Indore, commercial property Indore, Classic Realty Indore',
  authors: [{ name: 'Classic Realty Indore' }],
  openGraph: {
    title: 'Classic Realty Indore — Premium Commercial Real Estate',
    description: "Indore's premier commercial real estate platform for office, showroom & warehouse properties.",
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Realty Indore — Premium Commercial Real Estate',
    description: "Indore's premier commercial real estate platform.",
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta  name="facebook-domain-verification"content="ckqyc1ffa894fxqhyjpdf0ghev2k0i"/>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
