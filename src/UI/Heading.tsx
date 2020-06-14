import React from 'react';

interface IHeading {
  type?: string;
  h1?: string;
  h2?: string;
  gif?: string;
}

export default function Heading(IHeading: IHeading) {
  switch (IHeading.type) {
    case 'dark':
      return (
        <div id={IHeading.h1}>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
            {IHeading.h1}
          </h1>
          <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
            {IHeading.h2} <span role='img'>{IHeading.gif}</span>
          </h2>
        </div>
      );
    case 'white':
      return (
        <div id={IHeading.h1}>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
            {IHeading.h1}
          </h1>
          <h2 className='font-medium title-font tracking-widest text-white my-4 text-sm text-center sm:text-left'>
            {IHeading.h2} <span role='img'>{IHeading.gif}</span>
          </h2>
        </div>
      );
    default:
      return (
        <div id={IHeading.h1}>
          <h1 className='sm:text-4xl text-6xl font-medium title-font text-center text-white'>
            {IHeading.h1}
          </h1>
          <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
            {IHeading.h2} <span role='img'>{IHeading.gif}</span>
          </h2>
        </div>
      );
  }
}
