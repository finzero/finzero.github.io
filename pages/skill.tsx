import React from 'react';
import mySkills from '../public/json/skills.json';
import Image from 'next/image';
import style from '@/styles/Skills.module.css';
import Layout from './layout';

const Skill = () => {
  const { skills } = mySkills;

  return (
    <Layout>
      <div className={style.skillContainer}>
        <div className={style.leftContent}>
          <div className={style.title}>
            My Skill <br /> & Experience
          </div>
          <p>
            I Start my journey as a PHP developer, my first project was to build
            an assets management application using PHP, MySQL, JQuery and
            Oracle.
          </p>
          <p>
            My first Frontend project was to build a static Company Profile
            website, at that time there&apos;s no Frontend framework/library
            like Vue, Angular or React so i build it with just HTML, CSS &
            JQuery.
          </p>
          <p>
            I create a lot of web applications, building modular and component
            based application for reusable and manageble code. I also create
            multiple responsive web app that looks good in both mobile and
            desktop device, implementing lazy load for faster initial load.
          </p>
        </div>
        <div className={style.rightContent}>
          <div className="skillContainer">
            <div className={style.skillsContainer}>
              {skills.slice(0, 5).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image
                    src={`../${s.src}`}
                    width={60}
                    height={60}
                    alt={s.title}
                  />
                </div>
              ))}
            </div>
            <div className={`${style.skillsContainer}`}>
              {skills.slice(4, 9).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image
                    src={`../${s.src}`}
                    width={60}
                    height={60}
                    alt={s.title}
                  />
                </div>
              ))}
            </div>
            <div className={`${style.skillsContainer}`}>
              {skills.slice(10, 15).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image
                    src={`../${s.src}`}
                    width={60}
                    height={60}
                    alt={s.title}
                  />
                </div>
              ))}
            </div>
            <div className={`${style.skillsContainer}`}>
              {skills.slice(15, 18).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image
                    src={`../${s.src}`}
                    width={60}
                    height={60}
                    alt={s.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skill;
