import React from 'react';

interface IEducation {
  name: string;
  city?: string;
  period?: string;
  faculty?: string;
  degree?: string;
  uniLogo?: string;
}

export default function EducationCard(IEducation: IEducation) {
  return (
    <div className='flex relative pt-10 pb-20 sm:items-center md:w-4/6 mx-auto'>
      <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
        <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
      </div>
      <div className='flex-shrink-0 w-40 rounded-full h-6 mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm'>
        {IEducation.period}
      </div>
      <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
        <div className='flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center'>
          <img
            src={IEducation.uniLogo}
            className='object-cover object-center rounded-full'
            alt='uni-logo'
          />
        </div>
        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
          <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>
            {IEducation.name}, {IEducation.city}
            <br />
            {IEducation.faculty}
          </h2>
          <p className='leading-relaxed'>
            <b>Degree:</b> {IEducation.degree}
          </p>
        </div>
      </div>
    </div>
  );
}
