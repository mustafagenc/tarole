import '@/styles/globals.css';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Inter, Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getLangDir } from 'rtl-detect';

import { Header } from '@/components/header/header';
import { routing } from '@/i18n/routing';
import { env } from '@/lib/utils/env';
import Providers from '@/providers/providers';

import { Footer } from '@/components/footer/footer';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta');

  const imageData = {
    images: [
      {
        url:
          env.SITE_URL +
          '/images/someone-using-a-high-frequency-radio-amateur-transceiver.jpg',
      },
    ],
  };
  return {
    metadataBase: new URL(env.SITE_URL),
    title: {
      default: t('Title'),
      template: `%s • ${t('Title')}`,
    },
    description: t('Description'),
    openGraph: {
      ...imageData,
    },
    twitter: {
      card: 'summary_large_image',
      ...imageData,
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning={true}
      className="scroll-smooth"
    >
      <body
        className={`${inter.variable} ${poppins.variable} flex min-h-screen flex-col antialiased`}
      >
        <NextIntlClientProvider>
          <Providers>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
