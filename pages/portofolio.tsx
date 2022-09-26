import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Portofolio.module.css';
import Image from 'next/image';
import pict from '../public/img/father-n-son.jpg';
import { Items } from '../components/Items';

const Portofolio: NextPage = () => {
  return (
    <React.Fragment>
      <div className={styles.aboutMe}>
        <div className={styles.name}>
          <div>
            <strong>Fazrin Mutaqin</strong>
            <p>Front End Developer</p>
            <p>a passionate frontend developer who likes</p>
          </div>
        </div>
        <div className={styles.pict}>
          <Image alt="Fazrin Mutaqin" src={pict} />
        </div>
        <div className={styles.summary}>
          I have been working as a software developer since 2011. Meet a lot of
          people, working in a team and keep improving myself.
        </div>
      </div>
      <div>
        <Items title={'SKILLS'} className={'skills'} items={[]} />
        <Items title={'WORKS'} className={'projects'} items={[]} />
      </div>
    </React.Fragment>
  );
};

export default Portofolio;
