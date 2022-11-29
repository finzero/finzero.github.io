import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

const menu = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/skill', label: 'Skills' },
  { link: '/work', label: 'Work' },
  { link: '/resume', label: 'Resume' },
];

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  background: rgb(0 0 0 / 20%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media screen and (max-width: 768px) {
    height: 60px;
    width: 100vw;
    background: #000;
  }
`;

const SidebarMenu = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
  }
`;

const LinkContentStyle = styled.div`
  margin: 10px 0;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  transition: ease-in-out 0.2s;
  background: ${({ active }: { active: boolean }) =>
    active ? '#72e2ae' : 'inherit'};
  border-radius: ${({ active }: { active: boolean }) =>
    active ? '20px' : '0px'};
  color: ${({ active }: { active: boolean }) =>
    active ? '#000000' : '#FFFFFF'};
  &:hover {
    background: #72e2ae;
    border-radius: 20px;
    color: #000000;
  }
`;

const LinkContent = (props: {
  link: string;
  label: string;
  isActive: boolean;
}) => {
  return (
    <Link href={props.link}>
      <LinkContentStyle active={props.isActive}>{props.label}</LinkContentStyle>
    </Link>
  );
};

const NavSidebar = () => {
  const router = useRouter();
  const activeRoute = router.pathname;

  return (
    <Sidebar>
      <SidebarMenu>
        {menu.map((m) => (
          <LinkContent
            key={m.link}
            link={m.link}
            label={m.label}
            isActive={activeRoute === m.link}
          />
        ))}
      </SidebarMenu>
    </Sidebar>
  );
};

export default NavSidebar;
