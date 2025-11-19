import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <section className="h-screen w-full flex items-center justify-center bg-secondary">
        <h2 className="text-4xl font-mono text-gray-500">SCROLL TO FLOAT</h2>
      </section>
    </main>
  );
}
