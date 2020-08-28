import React from 'react';
import Paragraph from './Paragraph';
import ICompanyExperience from '../types/ICompanyExperience';

export default function CompanyExperience(props: ICompanyExperience) {
  return (
    <div className='py-8 flex flex-wrap md:flex-no-wrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span className='mt-1 text-gray-500 text-sm'>{props.date}</span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
          <a href={props.url} className='hover:opacity-75'>
            {props.company}
          </a>
          <br />
          <div className='text-blue-500'>{props.role}</div>
        </h2>

        <Paragraph content={props.description} />

        {props.stack && (
          <div className='font-medium'>
            Tech Stack:{' '}
            <p className='mt-2 text-gray-500 inline-flex items-center'>
              {props.stack}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
