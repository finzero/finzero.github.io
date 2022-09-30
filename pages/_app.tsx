import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [page, setPage] = useState('Portofolio');

  const togglePage = (e: MouseEvent) => {
    setPage(() => {
      e.preventDefault();
      const route = router.asPath;
      if (route === '/portofolio') {
        router.push('/resume');
        return 'Resume';
      } else {
        router.push('/portofolio');
        return 'Portofolio';
      }
    });
    //do redirect here
  };

  const FloatButton = () => (
    <button onClick={togglePage} className={'float-btn'}>
      {page === 'Portofolio' ? 'Resume' : 'Portofolio'}
    </button>
  );

  return (
    <div className={`container`}>
      <Head>
        <title>Fazrin Mutaqin - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Fazrin Mutaqin is an experienced frontend developer. Meet a lot of people, working in a team and keep improving myself."
        />
      </Head>
      <Component {...pageProps} />
      <FloatButton />
    </div>
  );
}

export default MyApp;
