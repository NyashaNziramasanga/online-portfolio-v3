import React from 'react';

interface IAboutIcon {
  src: string;
}

export default function AboutIcon(IAboutIcon: IAboutIcon) {
  return (
    <div
      data-aos='fade-right'
      className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'
    >
      <img
        className='object-cover object-center rounded-full'
        alt='hero'
        src={IAboutIcon.src}
      />
    </div>
  );
}
