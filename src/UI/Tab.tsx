import React from 'react';
import Tablist from './Tablist';

export default function Tab(props: any) {
  return (
    <div>
      <div className='flex items-center justify-center w-full py-10'>
        <ul className='flex'>
          <Tablist
            setOpenTab={props.setOpenTab}
            openTab={props.openTab}
            platform={'web'}
          />
          <Tablist
            setOpenTab={props.setOpenTab}
            openTab={props.openTab}
            platform={'wordpress'}
          />
          <Tablist
            setOpenTab={props.setOpenTab}
            openTab={props.openTab}
            platform={'chrome'}
          />
          <Tablist
            setOpenTab={props.setOpenTab}
            openTab={props.openTab}
            platform={'desktop'}
          />
        </ul>
      </div>
    </div>
  );
}
