import React from 'react';
import Heading from '../UI/Heading';
import EducationCard from '../UI/EducationCard';
import data from '../data/education.json';
import IEducation from '../interfaces/IEducation';

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
        {data.map((education: IEducation) => {
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
