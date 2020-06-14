import React from 'react';

export const Portfolio = () => {
  return (
    <section className='text-gray-400 bg-gray-900 body-font'>
      <h1 className='sm:text-4xl text-3xl font-medium title-font text-center text-white'>
        PORTFOLIO
      </h1>
      <h2 className='sm:text-3xl text-2xl text-center text-gray-500'>
        Projects I've worked on{' '}
        <span role='img' aria-label='Desktop Computer'>
          🖥️
        </span>
      </h2>

      <div className='container px-5 py-24 mx-auto'>
        <div className='flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
          <div className='sm:w-64 sm:h-64 h-64 w-64 sm:mr-5 inline-flex items-center justify-center text-blue-400 bg-gray-800 flex-shrink-0'></div>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-white text-lg title-font font-medium mb-2'>
              GitHub User Finder
            </h2>
            <p className='leading-relaxed text-base'>
              React app to search Github user profiles using the github api
            </p>
            <a className='mt-3 text-blue-500 inline-flex items-center'>
              React.js, Node.js, Express.js, MongoDB
            </a>
          </div>
        </div>
        <div className='flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
          <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
            <h2 className='text-white text-lg title-font font-medium mb-2'>
              Tax Calculator
            </h2>
            <p className='leading-relaxed text-base'>
              Income tax calculator react app
            </p>
            <a className='mt-3 text-blue-500 inline-flex items-center'>
              React, Recoil, Tailwindcss
            </a>
          </div>
          <div className='sm:w-64 order-first sm:order-none sm:h-64 h-64 w-64 sm:ml-10 inline-flex items-center justify-center text-blue-400 bg-gray-800 flex-shrink-0'>
            {/* Portfolio image*/}
          </div>
        </div>
      </div>
    </section>
  );
};
