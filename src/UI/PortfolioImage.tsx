import React from 'react';
import IPortfolio from '../types/IPortfolio';

export default function PortfolioImage(props: IPortfolio) {
  return (
    <a
      href={props.webURL ? props.webURL : props.githubURL}
      className='pr-2'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='sm:w-64 sm:h-40 h-64 w-40 sm:mr-5 inline-flex items-center justify-center text-blue-400 flex-shrink-0'>
        {props.gif ? (
          <img
            className='hover:opacity-0 bg-white absolute sm:w-64 sm:h-40 transition ease-in duration-500'
            src={props.image}
            alt={props.image}
          />
        ) : (
          <img
            className='bg-white absolute sm:w-64 sm:h-40 rounded border hover:border-blue-700 transition ease-in duration-300'
            src={props.image}
            alt={props.image}
          />
        )}

        {props.gif && (
          <img className='sm:w-64 sm:h-40' src={props.gif} alt={props.gif} />
        )}
      </div>
    </a>
  );
}
