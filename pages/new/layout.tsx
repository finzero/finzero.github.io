import React from 'react';
import NavSidebar from '../layout/nav-sidebar';

const containerStyle = {
  display: 'flex',
  background: 'rgb(0, 0, 0, .85)',
  color: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div style={containerStyle}>
      <NavSidebar />
      {children}
    </div>
  );
};

export default Layout;
