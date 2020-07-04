import React from 'react';
import PortfolioImage from '../UI/PortfolioImage';
import IPortfolio from '../interfaces/IPortfolio';

export default function PortfolioCard(props: IPortfolio) {
  return (
    <div className='flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
      <PortfolioImage
        image={props.image}
        gif={props.gif}
        githubURL={props.githubURL}
        webURL={props.webURL}
      />
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
        <div className='float-right'>
          {props.githubURL && (
            <a
              href={props.githubURL}
              className='pr-2 hover:opacity-75'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github pr-1' aria-hidden='true'></i>
              Github
            </a>
          )}
          {props.webURL && (
            <a
              href={props.webURL}
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
          {props.name}
        </h2>
        <p className='leading-relaxed text-base'>{props.desc}</p>
        <p className='mt-3 text-blue-500 inline-flex items-center'>
          {props.tech}
        </p>
      </div>
    </div>
  );
}
