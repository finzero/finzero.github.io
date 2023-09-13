import styled from 'styled-components';

const ResumeLeftContent = styled.div`
  width: 300px;
  justify-content: flex-start;
  background: #203d78;
  color: #fff;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media (max-width: 425px) {
    width: ${({ show }: { show: boolean }) => (show ? 300 : 50)}px;
    position: fixed;
    max-height: 100vh;
    overflow: ${({ show }: { show: boolean }) => (show ? 'auto' : 'hidden')};
    * {
      visibility: ${({ show }: { show: boolean }) =>
        show ? 'visible' : 'hidden'};
    }
  }
`;

export default ResumeLeftContent;
