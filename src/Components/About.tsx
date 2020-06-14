import React, { Fragment } from 'react';
import nash from '../assets/images/nash.jpg';
import upperWave from '../assets/icons/background/upper-wave-1.svg';
import lowerWave from '../assets/icons/background/lower-wave-1.svg';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';
import List from '../UI/List';

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
            <Paragraph
              content={`I enjoy developing and maintaining fullstack software
              applications, and feel right at home as a Software Developer. I am
              experienced in developing and designing products for the web.`}
            />
            <Paragraph
              content={`I'm currently studying a Masters of Computer Science at Flinders
              University Adelaide which I will complete in Dec 2021.`}
            />
            <Heading type={'white'} h2={'SKILLS:'} />
            <div className='items-stretch'>
              <Heading type={'white'} h2={'Programing Languages'} />
              <List item={'TypeScript'} />
              <List item={'JavaScript'} />
              <List item={'Java'} />
              <List item={'Sass'} />

              <Heading type={'white'} h2={'Libraries & Frameworks'} />
              <List item={'React'} />
              <List item={'Node'} />
              <List item={'MongoDB'} />
              <List item={'Express'} />

              <Heading type={'white'} h2={'Tools'} />
              <List item={'Git'} />
              <List item={'Microsoft Azure'} />
              <List item={'WordPress'} />
              <List item={'Postman'} />
              <List item={'Adobe Creative Cloud'} />
            </div>
          </div>
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
};
