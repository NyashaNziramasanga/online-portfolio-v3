import React, { useEffect } from 'react';
import './App.scss';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function App() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
