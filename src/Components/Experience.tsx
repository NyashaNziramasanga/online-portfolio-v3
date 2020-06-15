import React from 'react';
import Heading from '../UI/Heading';
import Paragraph from '../UI/Paragraph';

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
      <div className='container px-6 py-24 mx-auto'>
        <div className='-my-8'>
          <div className='py-8 flex flex-wrap md:flex-no-wrap'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
              <span className='mt-1 text-gray-500 text-sm'>
                Feb 2019 - Feb 2020
              </span>
            </div>
            <div className='md:flex-grow'>
              <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                Platformers <br />
                <div className='text-blue-500'>Junior Software Developer</div>
              </h2>

              <Paragraph
                content={` As a Software Developer, at Platformers, I am a member of the
                Billow Software development team of 4 developers that managed
                and support multiple client databases primarily in the
                construction industry. Developing and implementing custom web
                applications solutions for the Upvise.js Framework.`}
              />
            </div>
          </div>
          <div className='py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
              <span className='mt-1 text-gray-500 text-sm'>
                Oct 2018 - Jan 2019
              </span>
            </div>
            <div className='md:flex-grow'>
              <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                Carbar Auto
                <br />
                <div className='text-blue-500'>Intern Web Developer</div>
              </h2>
              <Paragraph
                content={`As a Web Developer at Carbar Auto, I was a member of the
                development team that constructed both customer-facing and
                administrative sites for managing the sales and subscriptions of
                Carbar vehicles.`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
