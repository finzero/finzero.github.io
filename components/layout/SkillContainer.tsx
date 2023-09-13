import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 180px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    margin-top: 60px;
  }
`;

export default SkillContainer;
