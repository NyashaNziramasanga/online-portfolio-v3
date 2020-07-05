import React from 'react';
import ILink from '../interfaces/ILink';

export default function Link(props: ILink) {
  return (
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      <p className='mt-3 text-blue-500 text-center'>{props.text}</p>
    </a>
  );
}
