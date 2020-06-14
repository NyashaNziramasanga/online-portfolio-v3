import React from 'react';

interface IProps {
  content: string;
}

export default function Paragraph(IProps: IProps) {
  return <p className='mb-4 leading-relaxed'>{IProps.content}</p>;
}
