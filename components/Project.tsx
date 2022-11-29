import React from 'react';
import styled from 'styled-components';

const ProjectName = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 1em;
  margin-bottom: 0.2em;
  color: #074275;
`;

const ProjectDesc = styled.div`
  font-size: 16px;
  font-style: italic;
`;

const ResponsibilitiesTitle = () => <strong>Responsibilities:</strong>;
const Stack = ({ children }: React.PropsWithChildren) => (
  <div>
    <strong>Stack:</strong> {children}
  </div>
);

const Project = ({ project: p }: any) => {
  return (
    <React.Fragment>
      <ProjectName>{p.title}</ProjectName>
      <ProjectDesc>{p.description}</ProjectDesc>
      {p.technologies && <Stack>{p.technologies.join(', ')}.</Stack>}
      <ResponsibilitiesTitle />
      {p.responsibilities &&
        p.responsibilities.map((res: any, resI: number) => (
          <li key={resI}>{res}</li>
        ))}
    </React.Fragment>
  );
};

export default Project;
