import React from 'react';
import Heading from '../UI/Heading';
import CompanyExperience from '../UI/CompanyExperience';
import data from '../data/experience.json';
import ICompanyExperience from '../interfaces/ICompanyExperience';

export const Experience = () => {
  return (
    <section className='text-gray-900 body-font overflow-hidden'>
      <Heading
        type={'dark'}
        h1={'EXPERIENCE'}
        h2={`Places I've worked at`}
        gif={'🏢'}
        animation={'fade-up'}
      />
      <div className='container px-6 py-24 mx-auto' data-aos='fade-in'>
        <div className='-my-8'>
          {data.map((experience: ICompanyExperience) => {
            return (
              <CompanyExperience
                url={experience.url}
                date={experience.date}
                company={experience.company}
                role={experience.role}
                description={experience.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
