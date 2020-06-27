import React from 'react';

interface ILink {
  href: string;
  text: string;
}
export default function Link(ILink: ILink) {
  return (
    <a href={ILink.href} target='_blank' rel='noopener noreferrer'>
      <p className='mt-3 text-blue-500 text-center'>{ILink.text}</p>
    </a>
  );
}
