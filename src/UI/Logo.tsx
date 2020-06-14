import React, { Fragment } from 'react';
import logo from '../assets/icons/logo.svg';

export default function Logo() {
  return (
    <Fragment>
      <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
        <img src={logo} alt='' />
        <span className='ml-3 text-xl'>NASH | SOFTWARE DEVELOPER</span>
      </a>
    </Fragment>
  );
}
