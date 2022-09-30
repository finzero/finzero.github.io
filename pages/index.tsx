import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Index: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === '/') {
      router.push('/portofolio');
    }
  }, []);

  return <div></div>;
};

export default Index;
