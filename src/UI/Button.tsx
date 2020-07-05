import React from 'react';
import IButton from '../interfaces/IButton';

export default function Button(props: IButton) {
  switch (props.type) {
    case 'dark':
      return (
        <a href={props.action} download={props.download && props.download}>
          <button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
            {props.name}
            {props.icon}
          </button>
        </a>
      );
    case 'blue':
      return (
        <a href={props.action} download={props.download && props.download}>
          <button className='inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
            {props.name}
          </button>
        </a>
      );
    default:
      return (
        <a href={props.action} download={props.download && props.download}>
          <button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
            {props.name}
          </button>
        </a>
      );
  }
}
