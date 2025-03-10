import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/index';

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;