import './globals.css';
import NavLinks from '@/app/components/nav-links/nav-links';
import { Lato } from 'next/font/google';

export const lato = Lato({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
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
