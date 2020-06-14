import React from 'react';

interface IProps {
  name: string;
  type?: string;
  icon?: string;
}

export default function Button(IProps: IProps) {
  switch (IProps.type) {
    case 'dark':
      return (
        <button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
          {IProps.name}
          {IProps.icon}
        </button>
      );
    case 'blue':
      return (
        <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
          {IProps.name}
        </button>
      );
    default:
      return (
        <button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
          {IProps.name}
        </button>
      );
  }
}