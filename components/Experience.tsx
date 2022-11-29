import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Projects from './Projects';

const ResumeContainer = styled.div``;
const ExperienceContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const WorkDate = styled.div`
  min-width: 200px;
`;

const WorkTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const Experience = (props: { data: IExperience }) => {
  const { workDate, position, employer, projects } = props.data;

  return (
    <ExperienceContainer>
      <WorkDate>{workDate}</WorkDate>
      <ResumeContainer>
        <WorkTitle>
          {employer} - {position}
        </WorkTitle>
        <Projects projects={projects} />
      </ResumeContainer>
    </ExperienceContainer>
  );
};

Experience.propTypes = {
  workDate: PropTypes.string,
  position: PropTypes.string,
  employer: PropTypes.string,
  responsibilities: PropTypes.array,
  projects: PropTypes.array,
};

export interface IExperience {
  workDate: string;
  position: string;
  employer: string;
  responsibilities?: any[];
  projects: any[];
}
