import './globals.css';
import { ReactNode } from 'react';
import { Lato } from 'next/font/google';
import NavLinks from '@/src/shared/ui/nav-links/nav-links';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        <title>NXTABLE</title>
        <link rel="icon" href="/favicon/favicon.svg" sizes="any" />
      </head>
      <body>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
