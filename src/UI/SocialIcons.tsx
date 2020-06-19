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
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='fill-current w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d='M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0'></path>
          </svg>
        </a>
      )}
      {ISocialIcons.facebookURL && (
        <a
          className='ml-3 text-gray-600 hover:opacity-75'
          href={ISocialIcons.facebookURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            fill='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
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
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
          </svg>
        </a>
      )}
      {ISocialIcons.instagramURL && (
        <a
          className='ml-3 text-gray-600 hover:opacity-75'
          href={ISocialIcons.instagramURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
            <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
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
            fill='currentColor'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='0'
            className='w-8 h-8'
            viewBox='0 0 24 24'
          >
            <path
              stroke='none'
              d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
            ></path>
            <circle cx='4' cy='4' r='2' stroke='none'></circle>
          </svg>
        </a>
      )}
    </span>
  );
}
