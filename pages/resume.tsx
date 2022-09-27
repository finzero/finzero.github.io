import React from 'react';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Resume.module.css';
import my from '../public/json/me.json';
import linkedinIcon from '../public/img/linkedin-icon.png';
import webIcon from '../public/img/web-icon.png';
import emailIcon from '../public/img/email-icon.png';
import homeIcon from '../public/img/home-icon.png';

import profilePictResume from '../public/img/profile-pict-2.jpg';

const Contact = (props: { data: string; icon: StaticImageData }) => (
  <div className={styles.contactItem}>
    <span>{props.data}</span>
    <Image width={24} height={24} src={props.icon} />
  </div>
);

const Resume: NextPage = () => {
  console.log('myInfo', my);

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
            <div className="mt-1 subtitle">Languages</div>
            {my.skills &&
              my.skills.map((skill) => <div className="mt-1">{skill}</div>)}

            <div className="mt-3 subtitle">Libraries</div>
            {my.libraries &&
              my.libraries.map((library) => (
                <div className="mt-1">{library}</div>
              ))}

            <div className="mt-3 subtitle">Frameworks</div>
            {my.frameworks &&
              my.frameworks.map((framework) => (
                <div className="mt-1">{framework}</div>
              ))}

            <div className="mt-3 subtitle">Graphic Design</div>
            {my.graphics &&
              my.graphics.map((graphic) => (
                <div className="mt-1">{graphic}</div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.resumeRight}>kanan</div>
    </div>
  );
};

export default Resume;
