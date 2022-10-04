import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`container`}>
      <Head>
        <title>Fazrin Mutaqin - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Fazrin Mutaqin is an experienced frontend developer. Meet a lot of people, working in a team and keep improving myself."
        />
        <meta name="color-scheme" content="light only" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
