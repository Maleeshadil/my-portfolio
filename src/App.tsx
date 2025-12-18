import { Navigation } from "./components/sections/Navigation";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Portfolio } from "./components/sections/Portfolio";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { ParticleBackground } from "./components/ui/ParticleBackground";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import "./App.css";
import { SkillsSection } from "./components/sections/SkillsSection";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <SkillsSection />
        <Portfolio />
        <Certifications />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
