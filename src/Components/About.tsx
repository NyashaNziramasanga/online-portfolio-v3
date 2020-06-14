import React, { Fragment } from 'react';
import nash from '../assets/images/nash.jpg';
import upperWave from '../assets/icons/background/upper-wave-1.svg';
import lowerWave from '../assets/icons/background/lower-wave-1.svg';
import Heading from '../UI/Heading';

export const About = () => {
  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-500 bg-gray-900 body-font relative'>
        <Heading h1={'ABOUT'} h2={'Coding is life'} gif={'👨‍💻'} />
        <div className='container mx-auto flex px-6 py-24 md:flex-row flex-col items-center'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
            <img
              className='object-cover object-center rounded-full'
              alt='hero'
              src={nash}
            />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <p className='mb-8 leading-relaxed'>
              I enjoy developing and maintaining fullstack software
              applications, and feel right at home as a Software Developer. I am
              experienced in developing and designing products for the web.
            </p>
            <p className='mb-8 leading-relaxed'>
              I'm currently studying a Masters of Computer Science at Flinders
              University Adelaide which I will complete in Dec 2021.
            </p>

            <h2 className='font-medium title-font tracking-widest text-white mb-4 text-sm text-center sm:text-left'>
              SKILLS
            </h2>
            <a className='mb-2'>
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
              TypeScript
            </a>
          </div>
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
};
