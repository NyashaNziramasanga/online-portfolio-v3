import React, { Fragment, useState } from 'react';
import lowerWave from '../assets/icons/background/lower-wave-2.svg';
import upperWave from '../assets/icons/background/upper-wave-2.svg';
import Heading from '../ui/Heading';
import PortfolioCard from '../ui/PortfolioCard';
import Tablist from '../ui/Tablist';
import GithubUserFinderGif from '../assets/images/portfolio/github-user-profile.gif';
import GithubUserFinderPng from '../assets/images/portfolio/github-user-profile.png';
import TaxCalculatorGif from '../assets/images/portfolio/tax-calculator.gif';
import TaxCalculatorPng from '../assets/images/portfolio/tax-calculator.png';
import OnlineResumePng from '../assets/images/portfolio/online-resume-v2.png';
import OnlineResumeGif from '../assets/images/portfolio/online-resume-v2.gif';
import CounterExampleGif from '../assets/images/portfolio/counter-example.gif';
import CounterExamplePng from '../assets/images/portfolio/counter-example.png';
import responsiveAnimatedNavbarPng from '../assets/images/portfolio/responsive-animated-navbar.png';
import responsiveAnimatedNavbarGif from '../assets/images/portfolio/responsive-animated-navbar.gif';
import Link from '../ui/Link';
import data from '../data/portfolio.json';

export const Portfolio = () => {
  const [openTab, setOpenTab] = useState('web');

  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-400 bg-gray-900 body-font'>
        <Heading h1={'PORTFOLIO'} h2={data.heading} animation={'fade-up'} />

        <div className='container px-5 py-12 mx-auto' data-aos='fade-in'>
          <div className='flex items-center justify-center w-full py-10'>
            <ul className='flex'>
              <Tablist
                setOpenTab={setOpenTab}
                openTab={openTab}
                platform={'web'}
              />
              <Tablist
                setOpenTab={setOpenTab}
                openTab={openTab}
                platform={'mobile'}
              />
              <Tablist
                setOpenTab={setOpenTab}
                openTab={openTab}
                platform={'chrome'}
              />
              <Tablist
                setOpenTab={setOpenTab}
                openTab={openTab}
                platform={'desktop'}
              />
              <Tablist
                setOpenTab={setOpenTab}
                openTab={openTab}
                platform={'other'}
              />
            </ul>
          </div>

          <PortfolioCard
            name={'🔎 React App to search Github user profiles 🔎'}
            desc={
              'React app to search Github user profiles using the github api'
            }
            tech={'React, Node, Express, MongoDB'}
            githubURL={
              'https://github.com/NyashaNziramasanga/GitHub-User-Finder'
            }
            webURL={'https://github-user-finder-web.netlify.com/'}
            gif={GithubUserFinderGif}
            image={GithubUserFinderPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Tax Calculator'}
            desc={'🧾 Income tax calculator react app 💵'}
            tech={'React, Recoil, Sass, Tailwindcss'}
            githubURL={'https://github.com/NyashaNziramasanga/tax-calculator'}
            webURL={'https://tax-calculator.netlify.app/'}
            gif={TaxCalculatorGif}
            image={TaxCalculatorPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Online Resume v2'}
            desc={'📝 Version 2 of my online resume 📝'}
            tech={'React, Sass'}
            webURL={'https://nyasha-nziramasanga-v2.netlify.app/'}
            githubURL={'https://github.com/NyashaNziramasanga/online-resume-v2'}
            gif={OnlineResumeGif}
            image={OnlineResumePng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'React Recoil Counter'}
            desc={'⛓️ Recoil state management with React JS counter example ⛓️'}
            tech={'React, Recoil'}
            webURL={'https://react-recoil-counter-example.vercel.app/'}
            githubURL={
              'https://github.com/NyashaNziramasanga/react-recoil-counter-example'
            }
            gif={CounterExampleGif}
            image={CounterExamplePng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'React Responsive Animated Navbar'}
            desc={'👾 React Responsive Animated CSS Navbar 🚀'}
            tech={'React, CSS'}
            webURL={'https://react-responsive-animated-navbar.vercel.app/'}
            githubURL={
              'https://github.com/NyashaNziramasanga/react-responsive-animated-navbar'
            }
            gif={responsiveAnimatedNavbarGif}
            image={responsiveAnimatedNavbarPng}
            platform={'web'}
            openTab={openTab}
          />

          <Link
            href={'https://github.com/NyashaNziramasanga'}
            text={'More on Github...'}
          />
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
};
