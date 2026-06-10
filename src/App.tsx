import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import SkillsSection from './components/Technologies';


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
         
          <Portfolio />
          <SkillsSection />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;