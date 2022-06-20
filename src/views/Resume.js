import React, { useEffect, useState } from 'react';
import { ExperienceList } from '../components/ExperienceList';
import { ResumeTop } from '../components/ResumeTop';
import { ResumeLeft } from '../components/ResumeLeft';
import './Resume.css';

export const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [my, setMy] = useState({});

  useEffect(() => {
    fetch('./json/experience.json')
      .then((res) => res.json())
      .then((response) => {
        setExperiences(response);
      });

    fetch('./json/me.json')
      .then((res) => res.json())
      .then((response) => {
        setMy(response);
      });
  }, []);

  return (
    <div id="resume" className="resume-container">
      <ResumeTop data={my} />
      <div className="row h-100">
        <ResumeLeft data={my} />
        <div className="col-md-9 col-sm-12 right-container">
          <div className="self-introduce">
            <p>{my.opener}</p>
          </div>
          <div className="right-title">Work History</div>
          <ExperienceList exps={experiences} />
        </div>
      </div>
    </div>
  );
};
