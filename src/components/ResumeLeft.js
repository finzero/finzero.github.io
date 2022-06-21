import React from 'react';
import profile from '../assets/img/profile-pict-2.jpg';

export const ResumeLeft = (props) => {
  const my = props.data;
  return (
    <div className="col-md-2 left-container d-none d-sm-none d-md-block">
      <div className="section-profile-pict d-none d-md-block">
        <img src={profile} alt="Profile" srcSet="" />
      </div>
      <div className="section-name">{my.name}</div>
      <div className="section-title">{my.position}</div>
      <div className="mt-4 left-title">Contact</div>
      <div className="mt-2 bold">Address</div>
      <div>{my.address}</div>
      <div className="mt-2 bold">Email</div>
      <div>{my.email}</div>
      <div className="mt-4 left-title">Portofolio</div>
      <div className="mt-2">{my.website}</div>
    </div>
  );
};
