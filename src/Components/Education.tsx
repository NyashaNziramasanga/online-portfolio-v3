import React from 'react';
import Heading from '../ui/Heading';
import EducationCard from '../ui/EducationCard';
import data from '../data/education.json';
import IEducation from '../types/IEducation';

export const Education = () => {
  return (
    <section className='text-gray-700 body-font'>
      <Heading
        type={'dark'}
        h1={'EDUCATION'}
        h2={data.heading}
        animation={'fade-up'}
      />
      <div
        data-aos='fade-right'
        className='container px-6 py-24 mx-auto flex flex-wrap'
      >
        {data.education.map((education: IEducation, i) => {
          return (
            <EducationCard
              key={i}
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
