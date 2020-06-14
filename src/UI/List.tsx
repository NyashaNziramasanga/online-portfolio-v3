import React from 'react';

interface IList {
  item: string;
}

export default function List(IList: IList) {
  return (
    <a className='mr-3'>
      <span className='bg-gray-800 text-blue-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
        <svg
          fill='none'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='3'
          className='w-3 h-3'
          viewBox='0 0 24 24'
        >
          <path d='M20 6L9 17l-5-5'></path>
        </svg>{' '}
      </span>
      {IList.item}
    </a>
  );
}
