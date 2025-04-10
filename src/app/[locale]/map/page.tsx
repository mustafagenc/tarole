import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('Home');
  return (
    <section className="mx-auto min-h-screen max-w-7xl grow px-4 antialiased lg:px-0">
      {t('Title')}
    </section>
  );
}
