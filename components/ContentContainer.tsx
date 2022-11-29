import styled from 'styled-components';

const ContentContainer = styled.div`
  padding-left: 180px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  @media (max-width: 428px) {
    padding: 80px 15px;
  }
`;
export default ContentContainer;
