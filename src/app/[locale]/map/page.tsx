'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  () => import('@/components/map/map-content').then((mod) => mod.MapContent),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <section className="mx-auto px-4 lg:px-0">
      <DynamicMap />
    </section>
  );
}
