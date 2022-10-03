import React, { useEffect, useState } from 'react';
import style from '../../styles/Resume.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ResumeSidebar = () => {
  const router = useRouter();

  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(router.pathname);
  }, [router]);

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarMenu}>
        <Link href={'/'}>
          <div className={active === '/' ? style.active : ''}>Home</div>
        </Link>
        <Link href={'about'}>
          <div className={active === '/about' ? style.active : ''}>About</div>
        </Link>
        <Link href={'skill'}>
          <div className={active === '/skill' ? style.active : ''}>
            My Skills
          </div>
        </Link>
        <Link href={'work'}>
          <div className={active === '/work' ? style.active : ''}>Work</div>
        </Link>
      </div>
    </div>
  );
};

export default ResumeSidebar;
