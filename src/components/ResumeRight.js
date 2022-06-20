import React from 'react';
import { ExperienceList } from '../components/ExperienceList';

export const ResumeRight = (props) => {
  const { my, experiences } = props.data;
  return (
    <div className="col-md-10 col-sm-12 right-container">
      <div className="self-introduce">
        <p>{my.opener}</p>
      </div>
      <div className="right-title">Work History</div>
      <ExperienceList exps={experiences} />
      {/* <!-- education --> */}
      <div className="right-title">Education</div>
      <div className="row mb-2">
        <div className="col-12">
          <div className="bold">{my.title}</div>
          <div className="campus">{my.campus}</div>
        </div>
      </div>

      {/* <!-- Hobby --> */}
      <div className="right-title">Hobbies</div>
      <div className="row">
        <div className="col-12">
          <div>{my.hobbies}</div>
        </div>
      </div>
      <hr />
      <a
        className="btn btn-sm btn-primary mb-2"
        href="./file/resume-fazrin-v4.pdf"
        download
      >
        Download Resume
      </a>
    </div>
  );
};
