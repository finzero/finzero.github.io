import React, { useState } from 'react';
import style from '../../styles/Sidebar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavSidebar = () => {
  const router = useRouter();
  const [active] = useState(router.pathname);

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarMenu}>
        <Link href={'/'}>
          <div className={active === '/' ? style.active : ''}>Home</div>
        </Link>
        <Link href={'/about'}>
          <div className={active === '/about' ? style.active : ''}>About</div>
        </Link>
        <Link href={'/skill'}>
          <div className={active === '/skill' ? style.active : ''}>Skills</div>
        </Link>
        <Link href={'/work'}>
          <div className={active === '/work' ? style.active : ''}>Work</div>
        </Link>
        <Link href={'/resume'}>
          <div>Resume</div>
        </Link>
      </div>
    </div>
  );
};

export default NavSidebar;
