import React from 'react';

interface IProps {
  name: string;
  desc: string;
  tech?: string;
}

export default function Card(IProps: IProps) {
  return (
    <div className='flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col'>
      <div className='sm:w-64 sm:h-64 h-64 w-64 sm:mr-5 inline-flex items-center justify-center text-blue-400 bg-gray-800 flex-shrink-0'>
        {/* Portfolio image*/}
      </div>
      <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
        <h2 className='text-white text-lg title-font font-medium mb-2'>
          {IProps.name}
        </h2>
        <p className='leading-relaxed text-base'>{IProps.desc}</p>
        <p className='mt-3 text-blue-500 inline-flex items-center'>
          {IProps.tech}
        </p>
      </div>
    </div>
  );
}
