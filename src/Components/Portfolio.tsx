import React, { Fragment } from 'react';
import lowerWave from '../assets/icons/background/lower-wave-2.svg';
import upperWave from '../assets/icons/background/upper-wave-2.svg';
import Heading from '../ui/Heading';
import PortfolioCard from '../ui/PortfolioCard';
import GithubUserFinderGif from '../assets/images/portfolio/github-user-profile.gif';
import GithubUserFinderPng from '../assets/images/portfolio/github-user-profile.png';
import TaxCalculatorGif from '../assets/images/portfolio/tax-calculator.gif';
import TaxCalculatorPng from '../assets/images/portfolio/tax-calculator.png';
import OnlineResumePng from '../assets/images/portfolio/online-resume-v2.png';
import OnlineResumeGif from '../assets/images/portfolio/online-resume-v2.gif';
import Link from '../ui/Link';
// import IPortfolio from '../interfaces/IPortfolio';
import data from '../data/portfolio.json';

export const Portfolio = () => {
  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-400 bg-gray-900 body-font'>
        <Heading h1={'PORTFOLIO'} h2={data.heading} animation={'fade-up'} />

        <div className='container px-5 py-24 mx-auto' data-aos='fade-in'>
          {/* {data.portfolio.map((p: IPortfolio, i) => {
            return (
              <PortfolioCard
                key={i}
                name={p.name}
                desc={p.desc}
                tech={p.tech}
                githubURL={p.githubURL}
                webURL={p.webURL}
                gif={p.gif}
                image={p.image}
              />
            );
          })} */}
          <PortfolioCard
            name={'GitHub User Finder'}
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
          />
          <PortfolioCard
            name={'Tax Calculator'}
            desc={'Income tax calculator react app'}
            tech={'React, Recoil, Sass, Tailwindcss'}
            githubURL={'https://github.com/NyashaNziramasanga/tax-calculator'}
            webURL={'https://tax-calculator.netlify.app/'}
            gif={TaxCalculatorGif}
            image={TaxCalculatorPng}
          />
          <PortfolioCard
            name={'Online Resume v2'}
            desc={'Version 2 of my online resume'}
            tech={'React, Sass'}
            webURL={'https://nyasha-nziramasanga-v2.netlify.app/'}
            githubURL={'https://github.com/NyashaNziramasanga/online-resume-v2'}
            gif={OnlineResumeGif}
            image={OnlineResumePng}
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
