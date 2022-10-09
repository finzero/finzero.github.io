import React, { useState } from 'react';
import style from '../../styles/Sidebar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BASE_PATH = '/new';

const NavSidebar = () => {
  const router = useRouter();

  const [active] = useState(router.pathname);

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarMenu}>
        <Link href={'/new'}>
          <div className={active === BASE_PATH ? style.active : ''}>Home</div>
        </Link>
        <Link href={'/new/about'}>
          <div className={active === BASE_PATH + '/about' ? style.active : ''}>
            About
          </div>
        </Link>
        <Link href={'/new/skill'}>
          <div className={active === BASE_PATH + '/skill' ? style.active : ''}>
            Skills
          </div>
        </Link>
        <Link href={'/new/work'}>
          <div className={active === BASE_PATH + '/work' ? style.active : ''}>
            Work
          </div>
        </Link>
        <Link href={'/resume'}>
          <div>Resume</div>
        </Link>
      </div>
    </div>
  );
};

export default NavSidebar;
