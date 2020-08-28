import React, { Fragment } from 'react';
import nash from '../assets/images/nash.jpg';
import upperWave from '../assets/icons/background/upper-wave-1.svg';
import lowerWave from '../assets/icons/background/lower-wave-1.svg';
import Heading from '../ui/Heading';
import Paragraph from '../ui/Paragraph';
import List from '../ui/List';
import AboutIcon from '../ui/AboutIcon';
import data from '../data/about.json';

export default function About() {
  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-500 bg-gray-900 body-font relative'>
        <Heading h1={'ABOUT'} h2={data.heading} animation={'fade-up'} />
        <div className='container mx-auto flex px-6 py-24 md:flex-row flex-col items-center'>
          <AboutIcon src={nash} />
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <Paragraph content={data.aboutP1} />
            <Paragraph content={data.aboutP2} />
            <Heading type={'white'} h2={'SKILLS:'} />
            <div className='items-stretch'>
              <Heading type={'white'} h2={'Programing Languages'} />
              {data.skills.programingLanguages.map((programingLanguages, i) => {
                return <List key={i} item={programingLanguages} />;
              })}

              <Heading type={'white'} h2={'Libraries & Frameworks'} />
              {data.skills.libraries.map((libraries, i) => {
                return <List key={i} item={libraries} />;
              })}

              <Heading type={'white'} h2={'Tools'} />
              {data.skills.tools.map((tools, i) => {
                return <List key={i} item={tools} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
}
