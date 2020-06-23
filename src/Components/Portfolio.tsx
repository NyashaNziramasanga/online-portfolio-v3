import React, { Fragment } from 'react';
import lowerWave from '../assets/icons/background/lower-wave-2.svg';
import upperWave from '../assets/icons/background/upper-wave-2.svg';
import Heading from '../UI/Heading';
import PortfolioCard from '../UI/PortfolioCard';
import GithubUserFinderGif from '../assets/images/portfolio/github-user-profile.gif';
import GithubUserFinderPng from '../assets/images/portfolio/github-user-profile.png';
import TaxCalculatorGif from '../assets/images/portfolio/tax-calculator.gif';
import TaxCalculatorPng from '../assets/images/portfolio/tax-calculator.png';
import mongoDdDemoGif from '../assets/images/portfolio/mongoDb-demo.gif';

export const Portfolio = () => {
  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-400 bg-gray-900 body-font'>
        <Heading
          h1={'PORTFOLIO'}
          h2={`Projects I've worked on`}
          gif={'🖥️'}
          animation={'fade-up'}
        />

        <div className='container px-5 py-24 mx-auto' data-aos='fade-in'>
          <PortfolioCard
            name={'GitHub User Finder'}
            desc={
              'React app to search Github user profiles using the github api'
            }
            tech={'React.js, Node.js, Express.js, MongoDB'}
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
            tech={'React.js, Node.js, Express.js, MongoDB'}
            githubURL={'https://github.com/NyashaNziramasanga/tax-calculator'}
            webURL={'https://tax-calculator.netlify.app/'}
            gif={TaxCalculatorGif}
            image={TaxCalculatorPng}
          />
          <PortfolioCard
            name={'Document Store Database Demo'}
            desc={
              'RESTful API demonstrating document store databases using MongoDB Atlas'
            }
            tech={'Node.js, Express.js, MongoDB'}
            githubURL={
              'https://github.com/NyashaNziramasanga/document-store-database-demo'
            }
            gif={mongoDdDemoGif}
          />
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
};
