import React from 'react';

interface ICopyright {
  name: string;
  twitterUrl?: string;
  twitterName?: string;
}

export default function Copyright(ICopyright: ICopyright) {
  return (
    <p className='text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
      © {new Date().getFullYear()} {ICopyright.name} —
      <a
        href={ICopyright.twitterUrl}
        className='text-gray-500 ml-1'
        target='_blank'
        rel='noopener noreferrer'
      >
        {ICopyright.twitterName}
      </a>
    </p>
  );
}
