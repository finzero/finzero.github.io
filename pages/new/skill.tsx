import React from 'react';
import mySkills from '../../public/json/skills.json';
import Image from 'next/image';
import style from '@/styles/Skills.module.css';
import Layout from './layout';

const Skill = () => {
  const { skills } = mySkills;

  return (
    <Layout>
      <div className="d-flex justify-content-between contentContainer">
        <div className="d-flex flex-column w-50">
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
            website, at that time there's no Frontend framework/library like
            Vue, Angular or React so i build it with just HTML, CSS & JQuery.
          </p>
          <p>
            I create a lot of web applications, building modular and component
            based application for reusable and manageble code. I also create
            multiple responsive web app that looks good in both mobile and
            desktop device, implementing lazy load for faster initial load.
          </p>
        </div>
        <div className="d-flex justify-content-center w-50">
          <div>
            <div className={style.skillsContainer}>
              {skills.slice(0, 4).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image src={`../${s.src}`} width={60} height={60} />
                </div>
              ))}
            </div>
            <div className={`${style.skillsContainer} mtpx-20`}>
              {skills.slice(4, 9).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image src={`../${s.src}`} width={60} height={60} />
                </div>
              ))}
            </div>
            <div className={`${style.skillsContainer} mtpx-20`}>
              {skills.slice(9, 13).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image src={`../${s.src}`} width={60} height={60} />
                </div>
              ))}
            </div>
            <div className={`${style.skillsContainer} mtpx-20`}>
              {skills.slice(13, 18).map((s: any, sIdx: number) => (
                <div className={style.skillFrame} key={sIdx}>
                  <Image src={`../${s.src}`} width={60} height={60} />
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
