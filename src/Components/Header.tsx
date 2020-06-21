import React from 'react';
import Logo from '../UI/Logo';
// import Button from '../UI/Button';
import HeaderLink from '../UI/HeaderLink';

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
          {/* <Button name={'Login'} type={'dark'} action={'#'} /> */}
        </div>
      </header>
    </div>
  );
};
