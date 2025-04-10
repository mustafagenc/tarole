'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { getLangDir } from 'rtl-detect';

import { Link, usePathname } from '@/i18n/navigation';
import { NAV_LINKS } from '@/lib/constants';

import { GithubButton } from './github-button';
import { LocaleSwitcher } from './locale-switcher';
import MenuButton from './menu-button';
import MobileMenu from './mobile-navbar';
import { ThemeSwitcher } from './theme-switcher';

function useToggleMenu() {
  const [menuShow, setMenuShow] = useState(false);
  const onMenuToggle = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };
  return [menuShow, onMenuToggle] as const;
}

export const Navbar = () => {
  const pathName = usePathname();

  const getClassnameForLink = (path: string) => {
    return pathName === path
      ? 'content-center rounded-md bg-gray-900 dark:bg-gray-950 px-3 py-2 text-sm font-medium text-white dark:text-gray-300'
      : 'content-center rounded-md px-3 py-2 text-sm font-medium text-white-950 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-950 dark:text-gray-300';
  };

  const t = useTranslations();
  const locale = useLocale();
  const direction = getLangDir(locale);

  const isRtl = direction === 'ltr';

  const homeLink =
    NAV_LINKS.find((link) => link.name.toLowerCase() === 'home')?.path ?? '/';

  const [menuShow, onMenuToggle] = useToggleMenu();

  return (
    <>
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
        <div>
          <Link
            href={homeLink}
            className="grid grid-flow-col content-stretch items-center gap-4"
          >
            <button
              className={`${isRtl ? 'mr-1' : 'ml-1'} group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:ring-green-200 focus:outline-none dark:text-white dark:focus:ring-green-800`}
            >
              <span className="relative rounded-md p-2">
                <Image
                  className="h-9 w-auto fill-white"
                  src="/antenna.svg"
                  alt={t('Meta.Title')}
                  dir={isRtl ? 'rtl' : 'ltr'}
                  width={512}
                  height={512}
                />
              </span>
            </button>
            <div className="font-popins text-2xl font-semibold text-shadow-2xs">
              <span className="hidden lg:block">{t('Meta.Title')}</span>
              <span className="lg:hidden">{t('App.ShortName')}</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="no-scrollbar hidden items-center gap-x-4 sm:flex md:max-w-72 lg:max-w-96">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={getClassnameForLink(link.path)}
              >
                {t(link.name)}
              </Link>
            ))}
          </div>
          <GithubButton />
          <LocaleSwitcher />
          <ThemeSwitcher />
          <MenuButton onClick={onMenuToggle} isOpened={menuShow} />
        </div>
      </nav>
      <MobileMenu onClick={onMenuToggle} isOpened={menuShow} />
    </>
  );
};
