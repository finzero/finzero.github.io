import React, { useEffect, useState } from 'react';
import style from '../../styles/Resume.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BASE_PATH = '/new';

const NavSidebar = () => {
  const router = useRouter();

  const [active, setActive] = useState('');

  useEffect(() => {
    //set style on menu based on active route
    console.log(router.pathname);
    setActive(BASE_PATH + router.pathname);
  }, [router]);

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarMenu}>
        <Link href={'/'}>
          <div className={active === BASE_PATH + '/' ? style.active : ''}>
            Home
          </div>
        </Link>
        <Link href={'about'}>
          <div className={active === BASE_PATH + '/about' ? style.active : ''}>
            About
          </div>
        </Link>
        <Link href={'skill'}>
          <div className={active === BASE_PATH + '/skill' ? style.active : ''}>
            My Skills
          </div>
        </Link>
        <Link href={'work'}>
          <div className={active === BASE_PATH + '/work' ? style.active : ''}>
            Work
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavSidebar;
