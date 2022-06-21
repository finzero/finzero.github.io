import React, { useEffect } from 'react';
import fathernson from '../assets/img/father-n-son.jpg';

export const AboutMe = () => {
  useEffect(() => {
    const expText =
      'I have been working as a software developer since 2011. Meet a lot of people, working in a team and keep improving myself.';
    let myExpEl = document.querySelector('.my-experience > p');
    animateText(expText, myExpEl);

    const aboutText = 'a passionate frontend developer who likes';
    let aboutEl = document.querySelector('.about-me');
    animateText(aboutText, aboutEl).then((res) => {
      const img = document.createElement('img');
      img.setAttribute('src', './50px/coffee-icon-4.png');
      img.setAttribute('title', 'Coffee');
      img.classList.add('coffee-icon');
      aboutEl.append(img);
    });
  }, []);

  const animateText = async (text, el) => {
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

  return (
    <div className="about">
      <div className="avatar">
        <img src={fathernson} alt="" />
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
