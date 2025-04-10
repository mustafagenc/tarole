'use client';
import { Loader } from 'lucide-react';
// import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales } from '@/lib/constants';

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  // const locale = useLocale();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost">
        <Loader className="size-5 animate-spin text-zinc-400" />
        <span className="sr-only">Loading...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" variant="outline" size="icon">
          <AiOutlineGlobal size={16} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.id}
            onClick={() => handleChange(locale.id)}
          >
            <Image src={locale.flag} alt={locale.name} width={16} height={16} />
            {locale.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
