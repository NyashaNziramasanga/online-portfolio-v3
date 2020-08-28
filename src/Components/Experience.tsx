import React from 'react';
import Heading from '../ui/Heading';
import CompanyExperience from '../ui/CompanyExperience';
import data from '../data/experience.json';
import ICompanyExperience from '../types/ICompanyExperience';

export const Experience = () => {
  return (
    <section className='text-gray-900 body-font overflow-hidden'>
      <Heading
        type={'dark'}
        h1={'EXPERIENCE'}
        h2={data.heading}
        animation={'fade-up'}
      />
      <div className='container px-6 py-24 mx-auto' data-aos='fade-in'>
        <div className='-my-8'>
          {data.experience.map((experience: ICompanyExperience, i) => {
            return (
              <CompanyExperience
                key={i}
                url={experience.url}
                date={experience.date}
                company={experience.company}
                role={experience.role}
                description={experience.description}
                stack={experience.stack}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
