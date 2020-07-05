import React from 'react';
import ICopyright from '../interfaces/ICopyright';

export default function Copyright(props: ICopyright) {
  return (
    <p className='text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
      © {new Date().getFullYear()} {props.name} —
      <a
        href={props.twitterUrl}
        className='text-gray-500 ml-1'
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.twitterName}
      </a>
    </p>
  );
}
