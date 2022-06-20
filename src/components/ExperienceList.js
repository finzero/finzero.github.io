import React from 'react';
import { Experience } from './Experience';

export const ExperienceList = (props) => {
  return (
    props.exps.length &&
    props.exps.map((exp) => <Experience key={exp.employer} data={exp} />)
  );
};
