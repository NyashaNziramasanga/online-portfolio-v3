import React from 'react';
import IHeading from '../types/IHeading';

export default function Heading(props: IHeading) {
  switch (props.type) {
    case 'dark':
      return (
        <div id={props.h1} data-aos={props.animation}>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
            {props.h1}
          </h1>
          <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
            {props.h2} <span role='img'>{props.gif}</span>
          </h2>
        </div>
      );
    case 'white':
      return (
        <div id={props.h1} data-aos={props.animation}>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
            {props.h1}
          </h1>
          <h2 className='font-medium title-font tracking-widest text-white my-4 text-sm text-center sm:text-left'>
            {props.h2} <span role='img'>{props.gif}</span>
          </h2>
        </div>
      );
    default:
      return (
        <div id={props.h1} data-aos={props.animation}>
          <h1 className='sm:text-4xl text-6xl font-medium title-font text-center text-white'>
            {props.h1}
          </h1>
          <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
            {props.h2} <span role='img'>{props.gif}</span>
          </h2>
        </div>
      );
  }
}
