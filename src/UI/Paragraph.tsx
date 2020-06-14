import React from 'react';

interface IParagraph {
  content: string;
}

export default function Paragraph(IParagraph: IParagraph) {
  return <p className='mb-4 leading-relaxed'>{IParagraph.content}</p>;
}
