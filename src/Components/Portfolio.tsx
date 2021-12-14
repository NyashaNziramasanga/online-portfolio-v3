import React, { Fragment, useState } from 'react';
import lowerWave from '../assets/icons/background/lower-wave-2.svg';
import upperWave from '../assets/icons/background/upper-wave-2.svg';
import Heading from '../UI/Heading';
import PortfolioCard from '../UI/PortfolioCard';
import Tab from '../UI/Tab';
import GithubUserFinderPng from '../assets/images/portfolio/github-user-profile.png';
import LendMarketPng from '../assets/images/portfolio/lendMarket.png';
import TaxCalculatorPng from '../assets/images/portfolio/tax-calculator.png';
import OnlineResumePng from '../assets/images/portfolio/online-resume-v2.png';
import CounterExampleGif from '../assets/images/portfolio/counter-example.gif';
import CounterExamplePng from '../assets/images/portfolio/counter-example.png';
import responsiveAnimatedNavbarPng from '../assets/images/portfolio/responsive-animated-navbar.png';
import nashLauncherPng from '../assets/images/portfolio/nash-launcher.png';
import screenyPng from '../assets/images/portfolio/screeny.png';
import mpcPng from '../assets/images/portfolio/mpc.png';
import platformersPng from '../assets/images/portfolio/platformers.png';
import platformHubPng from '../assets/images/portfolio/platformhub.png';
import sanspaperPng from '../assets/images/portfolio/sanspaper.png';
import wrecknetPng from '../assets/images/portfolio/wrecknet.png';
import Link from '../UI/Link';
import data from '../data/portfolio.json';

export default function Portfolio() {
  const [openTab, setOpenTab] = useState('web');

  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-400 bg-gray-900 body-font'>
        <Heading h1={'PORTFOLIO'} h2={data.heading} animation={'fade-up'} />

        <div className='container px-5 py-12 mx-auto' data-aos='fade-in'>
          <Tab openTab={openTab} setOpenTab={setOpenTab} />

          <PortfolioCard
            name={'Wrecknet Mobile App'}
            desc={'🏥 Website for medirite a UK based supported living care home 🏥'}
            tech={'Next.js, Vercel, TypeScript, Firebase, React Native'}
            webURL={'https://wrecknet.com.au/'}
            gif={''}
            image={wrecknetPng}
            platform={'mobile'}
            openTab={openTab}
          />

          <PortfolioCard
            name={' React App to search Github user profiles'}
            desc={'🔎 React app to search Github user profiles using the github api 🔎'}
            tech={'React, Node, Express, MongoDB'}
            githubURL={'https://github.com/NyashaNziramasanga/GitHub-User-Finder'}
            webURL={'https://github-user-finder-web.netlify.com/'}
            gif={''}
            image={GithubUserFinderPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={' Lendmarket'}
            desc={'💵 redesign of marketlend.com.au 🏦'}
            tech={'NextJS, Ant Design Pro, React, TypeScript'}
            githubURL={'https://github.com/NyashaNziramasanga/lendmarket'}
            webURL={'https://lendmarket.vercel.app/dashboard'}
            gif={''}
            image={LendMarketPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Tax Calculator'}
            desc={'🧾 Income tax calculator react app 💵'}
            tech={'React, Recoil,SCSS, Tailwindcss'}
            githubURL={'https://github.com/NyashaNziramasanga/tax-calculator'}
            webURL={'https://tax-calculator.netlify.app/'}
            gif={''}
            image={TaxCalculatorPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Online Resume v2'}
            desc={'📝 Version 2 of my online resume 📝'}
            tech={'React, SCSS'}
            webURL={'https://nyasha-nziramasanga-v2.netlify.app/'}
            githubURL={'https://github.com/NyashaNziramasanga/online-resume-v2'}
            gif={''}
            image={OnlineResumePng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'React Recoil Counter'}
            desc={'⛓️ Recoil state management with React JS counter example ⛓️'}
            tech={'React, Recoil'}
            webURL={'https://react-recoil-counter-example.vercel.app/'}
            githubURL={'https://github.com/NyashaNziramasanga/react-recoil-counter-example'}
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
            githubURL={'https://github.com/NyashaNziramasanga/react-responsive-animated-navbar'}
            gif={''}
            image={responsiveAnimatedNavbarPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Nash launcher'}
            desc={'🔗 Chrome extension with quick links to social profiles  🔗'}
            tech={'TypeScript, React, SCSS, Shell'}
            githubURL={'https://github.com/NyashaNziramasanga/nash-launcher'}
            gif={''}
            image={nashLauncherPng}
            platform={'chrome'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Electron Screen Recorder'}
            desc={'🖥️ Screen recording app built with electron  📹'}
            tech={'Electron, Javascript, HTML, CSS'}
            githubURL={'https://github.com/NyashaNziramasanga/electron-screen-recorder'}
            gif={''}
            image={screenyPng}
            platform={'desktop'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Monash Photography Club (MPC)'}
            desc={'Official MPC site for Monash University Photography Club'}
            tech={'WordPress'}
            webURL={'https://www.monashphotographyclub.com/'}
            gif={''}
            image={mpcPng}
            platform={'wordpress'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Platformers'}
            desc={'Company cite for Platformers for advertising software services'}
            tech={'WordPress'}
            webURL={'https://platformers.com.au/'}
            gif={''}
            image={platformersPng}
            platform={'wordpress'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Platform Hub'}
            desc={'SaaS platform for user management and integrations to gsuite, upvise and more'}
            tech={'React, Node, Express, MongoDB'}
            webURL={'https://platformhub.com.au/home/'}
            gif={''}
            image={platformHubPng}
            platform={'web'}
            openTab={openTab}
          />

          <PortfolioCard
            name={'Sans Paper'}
            desc={'Website advertising Sans Paper Mobile App'}
            tech={'Wordpress'}
            webURL={'http://sanspaper.com.au/'}
            gif={''}
            image={sanspaperPng}
            platform={'wordpress'}
            openTab={openTab}
          />

          <Link href={'https://github.com/NyashaNziramasanga'} text={'More on Github...'} />
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
}
