import React from 'react';
import IList from '../interfaces/IList';

export default function List(props: IList) {
  return (
    <span className='mr-3'>
      <span className='bg-gray-800 text-blue-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
        <svg
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='3'
          className='w-3 h-3'
          viewBox='0 0 24 24'
        >
          <path d='M20 6L9 17l-5-5'></path>
        </svg>{' '}
      </span>
      {props.item}
    </span>
  );
}
