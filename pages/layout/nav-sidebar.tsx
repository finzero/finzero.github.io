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
  margin: 10px;
  width: calc(150px - 20px);
  background: rgb(255 255 255 / 5%);
  height: calc(100vh - 20px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border: 1px solid rgb(102 102 102 / 58%);

  @media screen and (max-width: 768px) {
    height: 60px;
    width: calc(100vw - 20px);
    margin: 10px;
    border-bottom: 1px solid #666666;
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

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
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
