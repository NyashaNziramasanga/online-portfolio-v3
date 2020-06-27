import React from 'react';
import Paragraph from './Paragraph';

interface ICompanyExperience {
  date: string;
  company: string;
  role: string;
  description: string;
  stack?: string;
}

export default function CompanyExperience(
  ICompanyExperience: ICompanyExperience,
) {
  return (
    <div className='py-8 flex flex-wrap md:flex-no-wrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span className='mt-1 text-gray-500 text-sm'>
          {ICompanyExperience.date}
        </span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
          {ICompanyExperience.company} <br />
          <div className='text-blue-500'>{ICompanyExperience.role}</div>
        </h2>

        <Paragraph content={ICompanyExperience.description} />

        {ICompanyExperience.stack && (
          <p>
            <b> Tech Stack: </b>
            <p className='mt-2 text-blue-500 inline-flex items-center'>
              {ICompanyExperience.stack}
            </p>
          </p>
        )}
      </div>
    </div>
  );
}
