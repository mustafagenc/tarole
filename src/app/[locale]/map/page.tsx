'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  () => import('./dynamic').then((mod) => mod.DynamicMap),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <div className="size-full">
      <DynamicMap />
    </div>
  );
}
