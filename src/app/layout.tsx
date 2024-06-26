import type { Metadata } from 'next';

import { inter } from '@/styles/fonts';

import { getURL } from '@/utils/helpers';

import { Providers } from '../providers/providers';

import '../styles/globals.scss';

const meta = {
  title: 'HaoMo Dashboard',
  description: 'Content management system for HaoMo',
  cardImage: '/og.webp',
  robots: 'follow, index',
  favicon: '/icon.ico',
  url: getURL(),
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Vercel', 'Supabase', 'Next.js', 'Dashboard', 'HaoMo'],
    authors: [{ name: 'HaoMo', url: 'https://vercel.com/' }],
    creator: 'HaoMo',
    publisher: 'HaoMo',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@HarryChen824',
      creator: '@HarryChen824',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang='zh-TW'
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
