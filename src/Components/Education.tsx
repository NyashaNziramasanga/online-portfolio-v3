import React from 'react';
import Heading from '../UI/Heading';
import EducationCard from '../UI/EducationCard';
import education from '../data/education.json';

export const Education = () => {
  return (
    <section className='text-gray-700 body-font'>
      <Heading
        type={'dark'}
        h1={'EDUCATION'}
        h2={'Qualifications and Tertiary Studies'}
        gif={'🧑🏿‍🎓'}
        animation={'fade-up'}
      />
      <div
        data-aos='fade-right'
        className='container px-6 py-24 mx-auto flex flex-wrap'
      >
        {education.map((education) => {
          return (
            <EducationCard
              name={education.name}
              city={education.city}
              degree={education.degree}
              faculty={education.faculty}
              period={education.period}
              uniLogo={education.uniLogo}
            />
          );
        })}
      </div>
    </section>
  );
};
