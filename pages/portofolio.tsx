import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Portofolio.module.css';
import Image from 'next/image';
import pict from '../public/img/father-n-son.jpg';
import { Items } from '../components/Items';
import mySkills from '../public/json/skills.json';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';

const Portofolio: NextPage = () => {
  const [theme, setTheme] = useState('day');
  const { skills, socialMedia, works } = mySkills;
  const [skilAnimation, setSkilAnimation] = useState(false);
  const [workAnimation, setWorkAnimation] = useState(false);
  const [socialMediaAnimation, setSocialMediaAnimation] = useState(false);

  const onThemeChange = () => {
    setTheme((theme) => {
      return theme === 'day' ? 'night' : 'day';
    });
  };

  const animateText = async (text: string, el: HTMLElement) => {
    let fullText = '';
    return new Promise((resolve) => {
      text.split('').forEach((t, i) => {
        setTimeout(() => {
          fullText += t;
          el.innerHTML = fullText;
          if (text.length === i + 1) {
            resolve('resolved');
          }
        }, i * 30);
      });
    });
  };

  useEffect(() => {
    setTimeout(() => setSkilAnimation(true), 0);
    setTimeout(() => setWorkAnimation(true), 100);
    setTimeout(() => setSocialMediaAnimation(true), 200);

    const expText =
      'I have been working as a software developer since 2011. Meet a lot of people, working in a team and keep improving myself.';
    let myExpEl = document.getElementById('summary') as HTMLElement;
    animateText(expText, myExpEl);

    const aboutText = 'a passionate frontend developer who likes';
    let aboutEl = document.getElementById('meShort') as HTMLElement;
    animateText(aboutText, aboutEl).then((res) => {
      const img = document.createElement('img');
      img.setAttribute('src', './50px/coffee-icon-4.png');
      img.setAttribute('title', 'Coffee');
      img.setAttribute('style', 'margin-left: 10px');
      aboutEl.append(img);
    });
  }, []);

  return (
    <div className={`${styles.portofolioContainer} ${theme}`}>
      <ThemeToggle onChange={onThemeChange} />
      <Link href="resume">
        <button className={'float-btn'}>Resume</button>
      </Link>
      <div className={styles.aboutMe}>
        <div className={styles.name}>
          <div>
            <div className={styles.myName}>Fazrin Mutaqin</div>
            <div className={styles.jobTitle}>Front End Developer</div>
            <p id="meShort">a passionate frontend developer who likes</p>
          </div>
        </div>
        <div className={styles.pict}>
          <Image alt="Fazrin Mutaqin" src={pict} />
        </div>
        <div id="summary" className={styles.summary}>
          <p>
            I have been working as a software developer since 2011. Meet a lot
            of people, working in a team and keep improving myself.
          </p>
        </div>
      </div>
      <div>
        <Items
          title={'SKILLS'}
          items={skills}
          className={skilAnimation ? 'animate' : ''}
        />
        <Items
          title={'WORKS'}
          items={works}
          className={workAnimation ? 'animate' : ''}
        />
        <Items
          title={'SOCIAL MEDIA'}
          items={socialMedia}
          className={socialMediaAnimation ? 'animate' : ''}
        />
      </div>
    </div>
  );
};

export default Portofolio;
