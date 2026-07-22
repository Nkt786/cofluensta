import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cofluensta | Where Brands Meet Creators',
  description: 'Cofluensta connects creators, influencers and businesses for powerful collaborations. Connect. Collaborate. Grow.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#030014] text-slate-300 antialiased selection:bg-purple-600 selection:text-white pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
