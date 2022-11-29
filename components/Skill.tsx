import React, { Fragment } from 'react';

const Skill = (props: { skillName: string; skills: any[] }) => (
  <Fragment>
    <div className="mt-3 subtitle">{props.skillName}</div>
    {props.skills &&
      props.skills.map((skill) => (
        <div key={skill} className="mt-1">
          {skill}
        </div>
      ))}
  </Fragment>
);

export default Skill;
