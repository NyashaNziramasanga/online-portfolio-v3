import React from 'react';
import IAboutIcon from '../interfaces/IAboutIcon';

export default function AboutIcon(props: IAboutIcon) {
  return (
    <div
      data-aos='fade-right'
      className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'
    >
      <img
        className='object-cover object-center rounded-full'
        alt='hero'
        src={props.src}
      />
    </div>
  );
}
