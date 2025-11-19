import Hero from "@/components/hero/Hero";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Partners />
      <About />
    </main>
  );
}
