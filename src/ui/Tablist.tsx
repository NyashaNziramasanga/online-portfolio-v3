import React from 'react';
import ITablist from '../types/ITablist';

export default function Tablist(props: ITablist) {
  const Title =
    props.platform.charAt(0).toUpperCase() + props.platform.slice(1);
  return (
    <div>
      <li className='mr-3'>
        <a
          className={`inline-block border rounded py-1 px-3 text-white ${
            props.openTab === props.platform
              ? 'bg-blue-500 border-blue-500'
              : 'border-white'
          }
                `}
          onClick={(e) => {
            e.preventDefault();
            props.setOpenTab(props.platform);
          }}
          data-toggle='tab'
          href={`#${props.platform}`}
          role='tablist'
        >
          {Title}
        </a>
      </li>
    </div>
  );
}
