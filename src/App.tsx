import React, { useEffect } from 'react';
import './App.scss';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { Portfolio } from './Components/Portfolio';
import { Education } from './Components/Education';
import { Footer } from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
