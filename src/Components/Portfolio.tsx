import React, { Fragment } from 'react';
import lowerWave from '../assets/icons/background/lower-wave-2.svg';
import upperWave from '../assets/icons/background/upper-wave-2.svg';
import Heading from '../UI/Heading';
import Card from '../UI/Card';

export const Portfolio = () => {
  return (
    <Fragment>
      <img src={upperWave} alt='' />
      <section className='text-gray-400 bg-gray-900 body-font'>
        <Heading h1={'PORTFOLIO'} h2={`Projects I've worked on`} gif={'🖥️'} />
        <div className='container px-5 py-24 mx-auto'>
          <Card
            name={'GitHub User Finder'}
            desc={
              'React app to search Github user profiles using the github api'
            }
            tech={'React.js, Node.js, Express.js, MongoDB'}
          />
          <Card
            name={'Tax Calculator'}
            desc={'Income tax calculator react app'}
            tech={'React.js, Node.js, Express.js, MongoDB'}
          />
        </div>
      </section>
      <img src={lowerWave} alt='' />
    </Fragment>
  );
};
