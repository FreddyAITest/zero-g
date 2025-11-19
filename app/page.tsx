import Hero from "@/components/hero/Hero";
import Partners from "@/components/sections/Partners";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Demo from "@/components/sections/Demo";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Partners />
      <About />
      <Projects />
      <Demo />
      <Footer />
    </main>
  );
}
