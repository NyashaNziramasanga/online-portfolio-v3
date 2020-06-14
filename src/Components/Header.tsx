import React from 'react';
import Logo from '../UI/Logo';
import Button from '../UI/Button';
import { Link } from 'react-scroll';

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
          <Button name={'Contact'} type={'dark'} />
        </div>
      </header>
    </div>
  );
};

interface IHeaderLink {
  to: string;
  name: string;
}

export default function HeaderLink(IHeaderLink: IHeaderLink) {
  return (
    <div>
      <Link
        activeClass='active'
        className='mr-5 hover:text-white'
        to={IHeaderLink.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {IHeaderLink.name}
      </Link>
    </div>
  );
}
