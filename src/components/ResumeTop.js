import React from 'react';
import profile from '../assets/img/profile-pict-2.jpg';

export const ResumeTop = (props) => {
  const my = props.data;
  return (
    <div className="row">
      <div className="sm-header w-100 d-sm-block d-md-none">
        <div className="row">
          <div className="col-4">
            <div className="section-profile-pict">
              <img src={profile} alt="Profile" srcSet="" />
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
  );
};
