import React from 'react';
import { Link } from 'react-scroll';
import IHeaderLink from '../types/IHeaderLink';

export default function HeaderLink(props: IHeaderLink) {
  return (
    <div>
      <Link
        activeClass='active'
        className='mr-3 hover:text-white nav-link'
        to={props.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {props.name}
      </Link>
    </div>
  );
}
