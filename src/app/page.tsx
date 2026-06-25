import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg-primary min-h-screen selection:bg-accent-primary/30 selection:text-white">
      <Navigation />
      
      <div className="flex flex-col w-full relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Leadership />
        <Certifications />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
