'use client';

import { LICENSE_URL } from '@/lib/constants';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { PiBowlSteamFill } from 'react-icons/pi';

export const Footer = () => {
  const t = useTranslations();
  return (
    <>
      <footer className="mt-10 flex w-full items-center border-t-1 bg-gray-50 py-4 dark:bg-gray-950">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center space-x-2 lg:flex-row">
          <div className="flex grow flex-row items-center justify-center space-x-2 lg:justify-start">
            <span>
              {t.rich('Footer.Copyright', {
                date: new Date().getFullYear(),
                link: (chunks) => (
                  <Link
                    href="https://mustafagenc.info"
                    className="hover:underline"
                  >
                    {chunks}
                  </Link>
                ),
              })}
            </span>
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center space-x-2 text-sm hover:underline"
            >
              <span>{t('Footer.LicensedUnderTheApacheLicense')}</span>
            </a>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 lg:mt-0">
            <Link
              href="https://github.com/Safouene1/support-palestine-banner/blob/master/Markdown-pages/Support.md"
              target="_blank"
              className="flex"
            >
              <Image
                src={'/stand-with-palestine.svg'}
                alt="#StandWithPalestine"
                width={155}
                height={20}
              />
            </Link>
            <Link
              href="https://buymeacoffee.com/mustafagenc"
              target="_blank"
              className="flex flex-row items-center space-x-1.5 rounded-sm bg-blue-500 px-2 py-1 text-white shadow-sm transition duration-200 ease-in-out hover:opacity-90 dark:bg-blue-600"
            >
              <PiBowlSteamFill className="h-5 w-5" />
              <span className="text-shadow text-xs">
                {t('Footer.BuyMeATea')}
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
