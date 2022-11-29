import styled from 'styled-components';
import Project from './Project';

const ProjectContainer = styled.div``;
const ProjectTitle = styled.div`
  margin-top: 1em;
  font-weight: 700;
  font-size: 20px;
`;

const Projects = ({ projects }: { projects: any }) => {
  return (
    <ProjectContainer>
      {projects.length ? <ProjectTitle>Projects:</ProjectTitle> : null}
      {!!projects.length &&
        projects.map((p: any, i: number) => <Project key={i} project={p} />)}
    </ProjectContainer>
  );
};

export default Projects;
