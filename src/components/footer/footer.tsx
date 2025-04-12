'use client';

import { LICENSE_URL } from '@/lib/constants';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { PiBowlSteamFill } from 'react-icons/pi';

export const Footer = () => {
  const t = useTranslations();
  return (
    <>
      <footer className="bg-background flex h-20 w-full items-center border-t-1">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center lg:flex-row">
          <div className="mt-3 hidden grow lg:mt-0 lg:block">
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
            })}{' '}
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t('Footer.LicensedUnderTheApacheLicense')}
            </a>
          </div>
          <div className="mt-3 flex flex-row items-center gap-2 lg:mt-0">
            <Link
              href="https://x.com/search?q=IStandWithPalastine&f=live"
              target="_blank"
              className="flex h-7 flex-row items-center space-x-1.5 rounded-sm bg-gray-600 bg-[url(/palestine.svg)] bg-contain bg-right bg-no-repeat px-2 py-1 pr-9 text-white shadow-sm transition duration-200 ease-in-out hover:opacity-90"
            >
              <span className="text-shadow text-xs">#IStandWithPalestine</span>
            </Link>
            <Link
              href="https://buymeacoffee.com/mustafagenc"
              target="_blank"
              className="flex h-7 flex-row items-center space-x-1.5 rounded-sm bg-blue-500 px-2 py-1 text-white shadow-sm transition duration-200 ease-in-out hover:opacity-90 dark:bg-blue-600"
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
