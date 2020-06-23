import React from 'react';

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
      <div className='sm:w-64 sm:h-40 h-64 w-40 sm:mr-5 inline-flex items-center justify-center text-blue-400 bg-gray-800 flex-shrink-0 rounded'>
        <img
          className='hover:opacity-0 bg-white absolute sm:w-64 sm:h-40 h-64 w-40 sm:mr-5 transition ease-in duration-500'
          src={IPortfolio.image}
          alt={IPortfolio.image}
        />
        <img
          className='sm:w-64 sm:h-40 h-64 w-40'
          src={IPortfolio.gif}
          alt={IPortfolio.gif}
        />
      </div>
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
        <div className='float-right'>
          {IPortfolio.githubURL && (
            <a href={IPortfolio.githubURL} className='pr-2'>
              <i className='fab fa-github pr-1' aria-hidden='true'></i>
              Github
            </a>
          )}
          {IPortfolio.webURL && (
            <a href={IPortfolio.webURL} className='pr-2'>
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
