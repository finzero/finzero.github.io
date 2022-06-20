import React, { useEffect, useState } from 'react';
import { ExperienceList } from '../components/ExperienceList';
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
      .then((response) => setMy(response));
  }, []);

  return (
    <div id="resume" className="resume-container">
      <div className="row">
        <div className="sm-header w-100 d-sm-block d-md-none">
          <div className="row">
            <div className="col-4">
              <div className="section-profile-pict">
                <img src="./img/profile-pict-2.jpg" alt="Profile" srcSet="" />
              </div>
            </div>
            <div className="col-8">
              <div className="section-name">{my.name}</div>
              <div className="section-title">{my.position}</div>
              <div className="separator"></div>
              <div className="row">
                <div className="col-12">
                  <span className="contact-title">Address</span>{' '}
                  <span className="contact-value">{my.address}</span>
                </div>
                <div className="col-12">
                  <span className="contact-title">Email</span>{' '}
                  <span className="contact-value">{my.email}</span>
                </div>
                <div className="col-12">
                  <span className="contact-title">Website</span>{' '}
                  <span className="contact-value">{my.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row h-100">
        <div className="col-md-2 left-container d-none d-sm-none d-md-block">
          <div className="section-profile-pict d-none d-lg-block">
            <img src="./img/profile-pict-2.jpg" alt="Profile" srcSet="" />
          </div>
          <div className="section-name">{my.name}</div>
          <div className="section-title">{my.position}</div>
          <div className="mt-4 left-title">Contact</div>
          <div className="mt-2 bold">Address</div>
          <div>{my.address}</div>
          {/* <div className="mt-2 bold">Phone</div> */}
          {/* <div>{my.phone}</div> */}
          <div className="mt-2 bold">Email</div>
          <div>{my.email}</div>
          <div className="mt-4 left-title">Website</div>
          <div className="mt-2">{my.website}</div>
        </div>
        <div className="col-md-10 col-sm-12 right-container">
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
