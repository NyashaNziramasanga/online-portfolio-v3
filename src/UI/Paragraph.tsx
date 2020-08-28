import React from 'react';
import IParagraph from '../types/IParagraph';

export default function Paragraph(props: IParagraph) {
  return <p className='mb-4 leading-relaxed'>{props.content}</p>;
}
