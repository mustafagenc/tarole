'use client';

import { LicenseIcon } from '@/components/icons/license';
import { LICENSE_URL } from '@/lib/constants';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { PiBowlSteamFill } from 'react-icons/pi';

export const Footer = () => {
  const t = useTranslations();
  return (
    <>
      <footer className="mt-10 flex w-full items-center border-t-1 bg-gray-50 py-4 dark:bg-gray-950">
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center space-x-2 lg:flex-row">
          <div className="grow">
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center space-x-2 text-sm"
            >
              <LicenseIcon className="h-5 w-5 fill-black dark:fill-white" />{' '}
              <span>{t('Footer.LicensedUnderTheApacheLicense')}</span>
            </a>
          </div>
          <div className="mt-3 lg:mt-0">
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
