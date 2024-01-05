import React from 'react';
import NAV from '../components/NAV';
import MENU from '../components/MENU'
import AUDIOBAR from './AUDIOBAR';

const Layout = ({ children,index }) => {
  return (
    <div>
      <MENU/>
      <AUDIOBAR/>
      <NAV indexNumber = {index}/>
      {children}
    </div>
  );
};

export default Layout;
