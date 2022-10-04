import React from 'react';
import NavSidebar from '../layout/nav-sidebar';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <NavSidebar />
      {children}
    </div>
  );
};

export default Layout;
