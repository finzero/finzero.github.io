import React from 'react';
import style from '../styles/Portofolio.module.css';
import Image from 'next/image';

const Portofoliov2 = () => {
  return (
    <div className={style.portofolioContainer}>
      <div className={style.contentContainer}>
        <div className={style.portoProfilePict}>
          <Image src={require('../public/img/profile-pict-2.jpg')} />
        </div>
        <div className={style.introduction}>
          Hi, I'm <span className={style.animatedText}>Fazrin Mutaqin</span>
        </div>
        <div className={style.aboutMev2}>
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </div>
      </div>
    </div>
  );
};

export default Portofoliov2;
