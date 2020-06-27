import React from 'react';
import { Link } from 'react-scroll';

interface IHeaderLink {
  to: string;
  name: string;
}

export default function HeaderLink(IHeaderLink: IHeaderLink) {
  return (
    <div>
      <Link
        activeClass='active'
        className='mr-3 hover:text-white nav-link'
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
