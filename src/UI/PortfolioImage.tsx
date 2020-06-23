import React from 'react';

export default function PortfolioImage(props: {
  webURL: string | undefined;
  githubURL: string | undefined;
  image: string | undefined;
  gif: string | undefined;
}) {
  return (
    <a
      href={props.webURL ? props.webURL : props.githubURL}
      className='pr-2'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='sm:w-64 sm:h-40 h-64 w-40 sm:mr-5 inline-flex items-center justify-center text-blue-400 bg-gray-800 flex-shrink-0 rounded'>
        <img
          className='hover:opacity-0 bg-white absolute sm:w-64 sm:h-40 h-64 w-40 sm:mr-5 transition ease-in duration-500'
          src={props.image}
          alt={props.image}
        />
        <img
          className='sm:w-64 sm:h-40 h-64 w-40'
          src={props.gif}
          alt={props.gif}
        />
      </div>
    </a>
  );
}
