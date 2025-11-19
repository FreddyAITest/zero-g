import Hero from "@/components/hero/Hero";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a]">
      <Hero />
      <Services />
      <Footer />
    </main>
  );
}
