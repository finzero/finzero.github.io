import React from 'react';
import NavSidebar from './layout/nav-sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: rgb(0, 0, 0, 0.85);
  color: #fff;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <NavSidebar />
      {children}
    </Container>
  );
};

export default Layout;
