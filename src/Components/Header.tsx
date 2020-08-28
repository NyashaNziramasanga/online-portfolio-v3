import React from 'react';
import Logo from '../ui/Logo';
import HeaderLink from '../ui/HeaderLink';

export const Header = () => {
  return (
    <div>
      <header className='text-gray-500 bg-gray-900 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Logo />
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <HeaderLink to={'ABOUT'} name={'About'} />
            <HeaderLink to={'EXPERIENCE'} name={'Experience'} />
            <HeaderLink to={'PORTFOLIO'} name={'Portfolio'} />
            <HeaderLink to={'EDUCATION'} name={'Education'} />
          </nav>
        </div>
      </header>
    </div>
  );
};
