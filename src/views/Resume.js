import React, { useEffect, useState } from 'react';

import { ResumeTop } from '../components/ResumeTop';
import { ResumeLeft } from '../components/ResumeLeft';
import { ResumeRight } from '../components/ResumeRight';
import './Resume.css';

export const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [my, setMy] = useState({});
  const [loading, setLoading] = useState({
    experiences: false,
    my: false,
  });

  useEffect(() => {
    setLoading({
      experiences: true,
      my: true,
    });
    fetch('./json/experience.json')
      .then((res) => res.json())
      .then((response) => {
        setExperiences(response);
        setLoading((l) => ({ ...l, experiences: false }));
      });

    fetch('./json/me.json')
      .then((res) => res.json())
      .then((response) => {
        setMy(response);
        setLoading((l) => ({ ...l, my: false }));
      });
  }, []);

  return (
    <div id="resume" className="resume-container">
      <ResumeTop data={my} />
      <div className="row h-100">
        <ResumeLeft data={my} />
        <ResumeRight data={{ my, experiences }} loading={loading} />
      </div>
    </div>
  );
};
