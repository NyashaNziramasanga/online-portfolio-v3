import React from 'react';

interface IProps {
  type?: string;
  h1?: string;
  h2?: string;
  gif?: string;
}

export default function Heading(IProps: IProps) {
  switch (IProps.type) {
    case 'dark':
      return (
        <div>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
            {IProps.h1}
          </h1>
          <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
            {IProps.h2} <span role='img'>{IProps.gif}</span>
          </h2>
        </div>
      );
    case 'white':
      return (
        <div>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
            {IProps.h1}
          </h1>
          <h2 className='font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left'>
            {IProps.h2} <span role='img'>{IProps.gif}</span>
          </h2>
        </div>
      );
    default:
      return (
        <div>
          <h1 className='sm:text-4xl text-6xl font-medium title-font text-center text-white'>
            {IProps.h1}
          </h1>
          <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
            {IProps.h2} <span role='img'>{IProps.gif}</span>
          </h2>
        </div>
      );
  }
}
