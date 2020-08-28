import React from 'react';

interface ITablist {
  setOpenTab: any;
  openTab: any;
  type: 'web' | 'mobile' | 'chrome' | 'desktop' | 'other';
}

export default function Tablist(props: ITablist) {
  const Title = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  return (
    <div>
      <li className='mr-3'>
        <a
          className={`inline-block border rounded py-1 px-3 text-white ${
            props.openTab === props.type
              ? 'bg-blue-500 border-blue-500'
              : 'border-white'
          }
                `}
          onClick={(e) => {
            e.preventDefault();
            props.setOpenTab(props.type);
          }}
          data-toggle='tab'
          href={`#${props.type}`}
          role='tablist'
        >
          {Title}
        </a>
      </li>
    </div>
  );
}
