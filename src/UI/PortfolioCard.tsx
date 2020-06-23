import React from 'react';
import PortfolioImage from '../UI/PortfolioImage';

interface IPortfolio {
  name: string;
  desc: string;
  tech?: string;
  githubURL?: string;
  webURL?: string;
  gif?: string;
  image?: string;
}

export default function PortfolioCard(IPortfolio: IPortfolio) {
  return (
    <div className='flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
      <PortfolioImage
        image={IPortfolio.image}
        githubURL={IPortfolio.githubURL}
        gif={IPortfolio.gif}
        webURL={IPortfolio.webURL}
      />
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
        <div className='float-right'>
          {IPortfolio.githubURL && (
            <a
              href={IPortfolio.githubURL}
              className='pr-2 hover:opacity-75'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github pr-1' aria-hidden='true'></i>
              Github
            </a>
          )}
          {IPortfolio.webURL && (
            <a
              href={IPortfolio.webURL}
              className='pr-2 hover:opacity-75'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fas fa-globe pr-1' aria-hidden='true'></i>
              Web
            </a>
          )}
        </div>
        <h2 className='text-white text-lg title-font font-medium mb-2'>
          {IPortfolio.name}
        </h2>
        <p className='leading-relaxed text-base'>{IPortfolio.desc}</p>
        <p className='mt-3 text-blue-500 inline-flex items-center'>
          {IPortfolio.tech}
        </p>
      </div>
    </div>
  );
}
