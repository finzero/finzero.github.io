import React from 'react';
import { Experience, IExperience } from './Experience';

export const ExperienceList = (props: { exps: IExperience[] }) => {
  return !!props.exps.length ? (
    <div>
      {props.exps.map((exp) => (
        <Experience key={exp.employer} data={exp} />
      ))}
    </div>
  ) : (
    <div>No Data</div>
  );
};
