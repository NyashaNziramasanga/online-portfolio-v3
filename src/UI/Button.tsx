import React from 'react';

interface IButton {
  name: string;
  action: string;
  type?: string;
  icon?: string;
  download?: string;
}

export default function Button(IButton: IButton) {
  switch (IButton.type) {
    case 'dark':
      return (
        <a
          href={IButton.action}
          download={IButton.download && IButton.download}
        >
          <button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
            {IButton.name}
            {IButton.icon}
          </button>
        </a>
      );
    case 'blue':
      return (
        <a
          href={IButton.action}
          download={IButton.download && IButton.download}
        >
          <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
            {IButton.name}
          </button>
        </a>
      );
    default:
      return (
        <a
          href={IButton.action}
          download={IButton.download && IButton.download}
        >
          <button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
            {IButton.name}
          </button>
        </a>
      );
  }
}
