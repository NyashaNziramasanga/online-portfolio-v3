import React from 'react';
import Heading from '../UI/Heading';
import EducationCard from '../UI/EducationCard';
import MonashLogo from '../assets/images/monash-logo.jpg';
import FlindersLogo from '../assets/images/flinders-logo.png';

export const Education = () => {
  return (
    <section className='text-gray-700 body-font'>
      <Heading
        type={'dark'}
        h1={'EDUCATION'}
        h2={'Qualifications and Tertiary Studies'}
        gif={'🧑🏿‍🎓'}
      />
      <div className='container px-6 py-24 mx-auto flex flex-wrap'>
        <EducationCard
          name={'Flinders University'}
          city={'Adelaide'}
          degree={'Master of Science, Computer Science'}
          faculty={'College of Science andEngineering'}
          period={'Feb 2020 - Current'}
          uniLogo={FlindersLogo}
        />
        <EducationCard
          name={'Monash University'}
          city={'Melbourne'}
          degree={'Bachelor’s Degree, Information Technology and Systems'}
          faculty={'Faculty of Information Technology (FIT)'}
          period={'July 2014 - Feb 2018'}
          uniLogo={MonashLogo}
        />
      </div>
    </section>
  );
};
