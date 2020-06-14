import React from 'react';

export const Education = () => {
  return (
    <section className='text-gray-700 body-font'>
      <h1 className='sm:text-3xl text-2xl font-medium title-font text-center text-gray-900'>
        EDUCATION
      </h1>
      <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
        Qualifications and Tertiary Studies
        <span role='img' aria-label='Student: Dark Skin Tone'>
          🧑🏿‍🎓
        </span>
      </h2>
      <div className='container px-6 py-24 mx-auto flex flex-wrap'>
        <div className='flex relative pt-10 pb-20 sm:items-center md:w-5/6 mx-auto'>
          <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
            <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
          </div>
          <div className='flex-shrink-0 w-64 rounded-full h-6 mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm'>
            Feb 2020 - Current
          </div>
          <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-12 h-12'
                viewBox='0 0 24 24'
              >
                <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
              </svg>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                Flinders University, Adelaide <br /> College of Science and
                Engineering
              </h2>

              <p className='leading-relaxed'>
                <b>Degree:</b> Master of Science, Computer Science
              </p>
            </div>
          </div>
        </div>
        <div className='flex relative pb-20 sm:items-center md:w-5/6 mx-auto'>
          <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
            <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
          </div>
          <div className='flex-shrink-0 w-64 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm'>
            July 2014 - Feb 2018
          </div>
          <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-12 h-12'
                viewBox='0 0 24 24'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
                Monash University, Melbourne <br />
                Faculty of Information Technology (FIT)
              </h2>
              <p className='leading-relaxed'>
                <b>Degree:</b> Bachelor’s Degree, Information Technology and
                Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
