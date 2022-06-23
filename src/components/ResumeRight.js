import React from 'react';
import { ExperienceList } from '../components/ExperienceList';
import pdf from '../assets/file/Resume-fazrin-2022.pdf';

export const ResumeRight = (props) => {
  const { my, experiences } = props.data;
  const { loading } = props;
  return !loading.experiences ? (
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
      <a className="btn btn-sm btn-primary mb-2" href={pdf} download>
        Download Resume
      </a>
    </div>
  ) : (
    <div className="col-md-10 col-sm-12">
      <div className="self-introduce">
        <p className="placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
        </p>
      </div>
      <div className="right-title">Work History</div>
      <p className="placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
      </p>
      <div className="right-title">Education</div>
      <p className="placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
      </p>
      <div className="right-title">Hobbies</div>
      <p className="placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-3"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-7"></span>
        <span className="placeholder col-8"></span>
        <span className="placeholder col-3"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
      </p>
    </div>
  );
};
