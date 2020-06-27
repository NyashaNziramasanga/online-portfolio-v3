import React from 'react';
import Button from '../UI/Button';
import Dev from '../assets/icons/Dev.svg';
import SocialIcons from '../UI/SocialIcons';

export const Hero = () => {
  return (
    <section data-aos='fade-in' className='text-gray-700 body-font'>
      <div className='container mx-auto flex px-6 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:px-12 md:px-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900'>
            Hi, I'm Nyasha
            <span role='img' aria-label='Waving Hand: Dark Skin Tone'>
              {' '}
              👋🏿
            </span>
          </h1>
          <h2 className=' sm:text-2xl text-1xl mb-8 leading-relaxed'>
            Also known as Nash and I'm a Software Developer based in Australia
            developing web applications using JavaScript frameworks.
          </h2>

          <div className='flex justify-center'>
            <Button
              name={'CONTACT'}
              type={'blue'}
              action={'mailto:nyashanziramasanga1@gmail.com'}
            />
            <Button
              name={'RESUME'}
              action={'/files/resume-of-nyasha-nash-nziramasanga.pdf'}
              download={'resume-of-nyasha-nash-nziramasanga'}
            />
          </div>
          <div className='flex justify-center my-8'>
            <SocialIcons
              githubURL={'https://github.com/NyashaNziramasanga'}
              linkedInURL={
                'https://www.linkedin.com/in/nyasha-nash-nziramasanga-446380116/'
              }
              twitterURL={'https://twitter.com/NyashaNziboi'}
            />
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img src={Dev} alt='' />
        </div>
      </div>
    </section>
  );
};
