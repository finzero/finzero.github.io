import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeToggle from '../components/ThemeToggle';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('day');

  const onThemeChange = () => {
    setTheme((theme) => {
      return theme === 'day' ? 'night' : 'day';
    });
  };

  return (
    <div className={`container ${theme}`}>
      <ThemeToggle onChange={onThemeChange} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
