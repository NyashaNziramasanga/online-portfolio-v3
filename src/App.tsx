import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { Portfolio } from './Components/Portfolio';
import { Education } from './Components/Education';
import { Footer } from './Components/Footer';

function App() {
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
