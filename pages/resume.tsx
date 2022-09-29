import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Resume.module.css';
import my from '../public/json/me.json';
import experiences from '../public/json/experience.json';
import linkedinIcon from '../public/img/linkedin-icon.png';
import webIcon from '../public/img/web-icon.png';
import emailIcon from '../public/img/email-icon.png';
import homeIcon from '../public/img/home-icon.png';

import profilePictResume from '../public/img/profile-pict-2.jpg';
import { ExperienceList } from '../components/ExperienceList';

const Contact = (props: { data: string; icon: StaticImageData }) => (
  <div className={styles.contactItem}>
    <span>{props.data}</span>
    <Image width={24} height={24} src={props.icon} />
  </div>
);

const Skill = (props: { skillName: string; skills: any[] }) => (
  <Fragment>
    <div className="mt-3 subtitle">{props.skillName}</div>
    {props.skills &&
      props.skills.map((skill) => (
        <div key={skill} className="mt-1">
          {skill}
        </div>
      ))}
  </Fragment>
);

const Resume: NextPage = () => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.resumeLeft}>
        <div className={styles.resumeProfilePict}>
          <Image src={profilePictResume}></Image>
        </div>
        <div className="text-center mt-1">
          <div className="fs-25">
            <strong> {my.name}</strong>
          </div>
          <div className="fs-14">{my.position}</div>
        </div>
        <div className={styles.resumeInfoContainer}>
          <div className={styles.resumeLeftTitle}>Contact</div>
          <div className="padding-container">
            <Contact data={my.address} icon={homeIcon} />
            <Contact data={my.email} icon={emailIcon} />
            <Contact data={my.website} icon={webIcon} />
            <Contact data={my.linkedin} icon={linkedinIcon} />
          </div>
          <div className={styles.resumeLeftTitle}>Skills</div>
          <div className="padding-container">
            <Skill skillName="Languages" skills={my.skills} />
            <Skill skillName="Libraries" skills={my.libraries} />
            <Skill skillName="Frameworks" skills={my.frameworks} />
            <Skill skillName="Graphic Design" skills={my.graphics} />
          </div>
        </div>
      </div>
      <div className={styles.resumeRight}>
        <div className={styles.resumeRightTitle}>Work Experience</div>
        <ExperienceList exps={experiences} />
      </div>
    </div>
  );
};

export default Resume;
