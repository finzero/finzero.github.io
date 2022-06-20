import React, { useEffect } from 'react';

export const AboutMe = () => {
  useEffect(() => {
    const text =
      'I have been working as a software developer since 2011. Meet a lot of people, working in a team and keep improving myself.';
    let fullText = '';
    let timeout = null;
    let myExpEl = document.querySelector('.my-experience > p');
    clearTimeout(timeout);
    text.split('').forEach((t, i) => {
      timeout = setTimeout(() => {
        fullText += t;
        myExpEl.innerHTML = fullText;
      }, i * 30);
    });
  }, []);

  return (
    <div className="about">
      <div className="avatar">
        <img src="./img/tempat-makan.jpeg" alt="" />
      </div>
      <div className="my-info">
        <div className="name">
          Fazrin <br />
          Mutaqin
        </div>
        <span className="job-title">Front End Developer</span>
        <p className="about-me"></p>
      </div>
      <div className="my-experience">
        <p></p>
      </div>
    </div>
  );
};
