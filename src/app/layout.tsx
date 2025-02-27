import type { Metadata } from 'next';

import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const NoScript = () => (
    <noscript>
        <div className='no-js-message'>
            JavaScript is disabled in your browser. Please enable JavaScript for
            the full experience.
        </div>
    </noscript>
);

export const metadata: Metadata = {
    title: 'BookNook - Easy Book Club Management',
    description: 'Perfect app to create, run and be a part of a book club',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={geistSans.variable}>
                <>
                    <NoScript />
                    {children}
                </>
            </body>
        </html>
    );
}
