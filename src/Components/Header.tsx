import React from 'react';
import Logo from '../UI/Logo';
import Button from '../UI/Button';

export const Header = () => {
  return (
    <div>
      <header className='text-gray-500 bg-gray-900 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Logo />
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a className='mr-5 hover:text-white'>About</a>
            <a className='mr-5 hover:text-white'>Experience</a>
            <a className='mr-5 hover:text-white'>Portfolio</a>
            <a className='mr-5 hover:text-white'>Education</a>
          </nav>
          <Button name={'Contact'} type={'dark'} />
        </div>
      </header>
    </div>
  );
};
