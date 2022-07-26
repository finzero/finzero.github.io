import React, { useEffect } from 'react';
import profile from '../assets/img/profile-pict-2.jpg';

export const ResumeLeft = (props) => {
  const my = props.data;
  useEffect(() => {
    console.log('my', my);
  }, [my]);

  return (
    <div className="col-md-2 left-container d-none d-sm-none d-md-block">
      {/* <div className="section-profile-pict d-none d-md-block">
        <img src={profile} alt="Profile" srcSet="" />
      </div> */}
      <div className="section-name">{my.name}</div>
      <div className="section-title">{my.position}</div>
      <div className="mt-4 left-title">Contact</div>
      <div className="mt-1">{my.address}</div>
      <div className="mt-1">{my.email}</div>
      <div className="mt-1">{my.website}</div>

      <div className="mt-4 left-title">Skills</div>
      <div className="mt-1 subtitle">Languages</div>
      {my.skills &&
        my.skills.map((skill) => <div className="mt-1">{skill}</div>)}

      <div className="mt-3 subtitle">Libraries</div>
      {my.libraries &&
        my.libraries.map((library) => <div className="mt-1">{library}</div>)}

      <div className="mt-3 left-title">Frameworks</div>
      {my.frameworks &&
        my.frameworks.map((framwork) => <div className="mt-1">{framwork}</div>)}
    </div>
  );
};
