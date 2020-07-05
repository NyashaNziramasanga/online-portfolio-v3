import React from 'react';
import IParagraph from '../interfaces/IParagraph';

export default function Paragraph(props: IParagraph) {
  return <p className='mb-4 leading-relaxed'>{props.content}</p>;
}
