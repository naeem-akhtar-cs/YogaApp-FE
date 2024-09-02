import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const getMetadata = (): Metadata => ({
  title: 'Mehab',
  description: 'Mehab app',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata = getMetadata();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
