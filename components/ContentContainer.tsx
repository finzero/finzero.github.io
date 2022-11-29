import styled from 'styled-components';

const ContentContainer = styled.div`
  padding-left: 180px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
`;
export default ContentContainer;
