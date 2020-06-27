import React from 'react';

interface ISocialIcons {
  facebookURL?: string;
  twitterURL?: string;
  instagramURL?: string;
  linkedInURL?: string;
  githubURL?: string;
}

export default function SocialIcons(ISocialIcons: ISocialIcons) {
  return (
    <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
      {ISocialIcons.githubURL && (
        <a
          className='text-gray-600 hover:opacity-75'
          href={ISocialIcons.githubURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            fill='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='fill-current w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d='M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0'></path>
          </svg>
        </a>
      )}
      {ISocialIcons.twitterURL && (
        <a
          className='ml-3 text-gray-600 hover:opacity-75'
          href={ISocialIcons.twitterURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            fill='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
          </svg>
        </a>
      )}
      {ISocialIcons.linkedInURL && (
        <a
          className='ml-3 text-gray-600 hover:opacity-75'
          href={ISocialIcons.linkedInURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fab'
            data-icon='linkedin'
            className='fill-current w-8 h-8'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path
              fill='currentColor'
              d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
            ></path>
          </svg>
        </a>
      )}
    </span>
  );
}
