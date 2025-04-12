import Layer from '@/components/shared/layer';
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('Home');
  return <Layer>{t('Title')}</Layer>;
}
