interface LayerProps {
  children: React.ReactNode;
}

export default function Layer({ children }: LayerProps) {
  return (
    <section className="mx-auto mt-3 mb-10 min-h-40 max-w-7xl grow px-4 antialiased lg:px-0">
      {children}
    </section>
  );
}
