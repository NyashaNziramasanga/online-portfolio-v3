import React from 'react';
import Heading from '../UI/Heading';
import CompanyExperience from '../UI/CompanyExperience';

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
          <CompanyExperience
            date={'Feb 2019 - Feb 2020'}
            company={'Platformers'}
            role={'Junior Software Developer'}
            description={`As a Software Developer, at Platformers, I was member of the
            Billow Software development team of 4 developers that managed
            and support multiple client databases primarily in the
            construction industry. Developing and implementing full-stack web
            applications solutions for the Upvise.js Framework.`}
            // stack={`MongoDB, Express.js, React.js, Node.js (MERN Stack)`}
          />
          <CompanyExperience
            date={'Oct 2018 - Jan 2019'}
            company={'Carbar Auto'}
            role={'Intern Web Developer'}
            description={`As a Web Developer at Carbar Auto, I was a member of the
            development team that constructed both customer-facing and
            administrative sites for managing the sales and subscriptions of
            Carbar vehicles.`}
            // stack={`JavaScript, Laravel, PHP, AWS (MERN Stack)`}
          />
        </div>
      </div>
    </section>
  );
};
