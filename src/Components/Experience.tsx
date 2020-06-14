import React from 'react';

export const Experience = () => {
  return (
    <section className='text-gray-900 body-font overflow-hidden'>
      <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
        EXPERIENCE
      </h1>
      <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
        Places I've worked at
        <span role='img' aria-label='Office'>
          🏢
        </span>
      </h2>
      <div className='container px-6 py-24 mx-auto'>
        <div className='-my-8'>
          <div className='py-8 flex flex-wrap md:flex-no-wrap'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
              <span className='mt-1 text-gray-500 text-sm'>
                FEB 2019 - FEB 2020
              </span>
            </div>
            <div className='md:flex-grow'>
              <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                Platformers <br />
                <div className='text-blue-500'>Junior Software Developer</div>
              </h2>
              <p className='leading-relaxed'>
                As a Software Developer, at Platformers, I am a member of the
                Billow Software development team of 4 developers that managed
                and support multiple client databases primarily in the
                construction industry. Developing and implementing custom web
                applications solutions for the Upvise.js Framework.
              </p>
            </div>
          </div>
          <div className='py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap'>
            <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
              <span className='mt-1 text-gray-500 text-sm'>
                OCT 2018 - JAN 2019
              </span>
            </div>
            <div className='md:flex-grow'>
              <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                Carbar Auto
                <br />
                <div className='text-blue-500'>Intern Web Developer</div>
              </h2>
              <p className='leading-relaxed'>
                As a Web Developer at Carbar Auto, I was a member of the
                development team that constructed both customer-facing and
                administrative sites for managing the sales and subscriptions of
                Carbar vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
