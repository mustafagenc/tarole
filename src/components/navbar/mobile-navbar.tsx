import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { NAV_LINKS } from '@/lib/constants';

interface Props {
  isOpened: boolean;
  onClick(): void;
}

export default function MobileMenu({ isOpened, onClick }: Props) {
  const t = useTranslations();
  return (
    <div
      className={`fixed right-0 z-20 h-screen w-full transform bg-white duration-500 ease-in-out lg:hidden dark:bg-black ${
        isOpened ? 'translate-x-0' : '-translate-x-full'
      } bg-opacity-30 dark:bg-opacity-30 firefox:bg-opacity-100 dark:firefox:bg-opacity-100 backdrop-blur-lg backdrop-saturate-150 backdrop-filter`}
    >
      <nav className="mt-8 h-full space-y-8">
        {NAV_LINKS.map((link) => (
          <div key={link.name} className="px-12">
            <Link
              href={link.path}
              title={t(link.name)}
              className="text-xl leading-8 font-semibold tracking-wide text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              onClick={onClick}
            >
              {t(link.name)}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
