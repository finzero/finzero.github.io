import React from 'react';
import ResumeLeftTitle from '@/components/ResumeLeftTitle';
import PaddingContainer from './PaddingContainer';
import Skill from '@/components/Skill';

const Skills = ({
  data,
}: {
  data: {
    skills: string[];
    libraries: string[];
    frameworks: string[];
    graphics: string[];
  };
}) => {
  return (
    <React.Fragment>
      <ResumeLeftTitle>Skills</ResumeLeftTitle>
      <PaddingContainer>
        <Skill skillName="Languages" skills={data.skills} />
        <Skill skillName="Libraries" skills={data.libraries} />
        <Skill skillName="Frameworks" skills={data.frameworks} />
        <Skill skillName="Graphic Design" skills={data.graphics} />
      </PaddingContainer>
    </React.Fragment>
  );
};

export default Skills;
